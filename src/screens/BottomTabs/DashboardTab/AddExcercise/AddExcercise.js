import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  Alert,
  SectionList,
} from 'react-native';
import styles from './styles';
import {
  AppHeader,
  SearchBar,
  ExcerciseCard,
  ExerciseFilter,
  PrimaryHeading,
  SelectButton,
  AddNewExercise,
  Loader,
} from '../../../../components';
import {
  appIcons,
  appImages,
  BASE_URL,
  checkConnected,
  colors,
  filterBody,
  filterCategory,
  responseValidator,
  spacing,
  WP,
} from '../../../../shared/exporter';
import FilterItem from '../../../../components/Cards/FilterItem/FilterItem';
import {useDispatch, useSelector} from 'react-redux';
import {
  get_exercise_request,
  get_filter_exercise_request,
  select_body_filter_request,
  select_category_filter_request,
  set_body_filtered_request,
  set_category_filtered_request,
  set_exercise_item_request,
  set_exercise_recent_search_request,
  set_filtered_exercise_request,
} from '../../../../redux/actions';
import {useIsFocused} from '@react-navigation/core';

const AddExcercise = ({navigation}) => {
  const [sectionListData, setSectionListData] = useState([]);
  const [sectionListTempData, setSectionListTempData] = useState([]);
  const [filterExcersice, setFilterExcersice] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBody, setSelectedBody] = useState(null);
  const {userInfo} = useSelector(state => state.auth);

  const isFocus = useIsFocused(null);
  const {
    categoryFilteredArray,
    bodyFilteredArray,
    filtered_exercises,
    recent_searches,
    selected_category,
    selected_bodyPart,
  } = useSelector(state => state?.exercise);
  const dispatch = useDispatch(null);

  //References
  const addExerciseSheetRef = useRef(null);

  useEffect(() => {
    if (isFocus) {
      getExercises();
    }
    return () => {
      setSelectedItem(null);
      setSectionListData([]);
      setSectionListTempData([]);
    };
  }, [isFocus, selectedCategory, selectedBody]);

  //Filter Functions
  const onPressSelectedBody = item => {
    dispatch(select_body_filter_request(item));
  };

  const onPressSelectedCategory = item => {
    dispatch(select_category_filter_request(item));
  };

  //get Filtered Items
  const getFilteredItems = () => {
    dispatch(
      set_category_filtered_request(filterCategory, () => {
        console.log('category setted');
        setFilterExcersice(true);
      }),
    );
    dispatch(
      set_body_filtered_request(filterBody, () => {
        console.log('Body Part Settted');
      }),
    );

    // const filterSuccess = res => {
    //   console.log(res);
    //   setFilterExcersice(true);
    // };
    // const filterFailed = res => {
    //   console.log(res);
    // };
    // dispatch(get_filter_exercise_request('', filterSuccess, filterFailed));
  };

  const onChangeSearchText = text => {
    if (text === '') {
      setSectionListData(sectionListTempData);
      return;
    }
    let matchedItemsArray = [];
    sectionListTempData.map(item => {
      let newDAta = [];
      item.data.map(obj => {
        if (obj.name.toUpperCase().includes(text.toUpperCase())) {
          newDAta.push(obj);
        }
      });
      if (newDAta.length > 0) {
        matchedItemsArray.push({
          ...item,
          data: newDAta,
        });
      }
    });
    setSectionListData(matchedItemsArray);
  };

  const onSelectionChange = item => {
    setSectionListData(
      sectionListData.map(elem => {
        let newData = elem.data.map(obj => {
          obj.selected = false;
          if (obj.parent_category === elem.title && item.id === obj.id) {
            return {
              ...obj,
              selected: !obj.selected,
            };
          }
          return obj;
        });
        return {
          ...elem,
          data: newData,
        };
      }),
    );
    setSelectedItem(item);
    dispatch(
      set_exercise_item_request(item, () => {
        console.log('Item Setted');
      }),
    );
  };

  //Render Exercise Cards
  const renderItem = ({item, index}) => {
    return (
      <View style={[spacing.my2]}>
        <ExcerciseCard
          type={item?.exercise_type}
          icon={
            item?.exercise_image
              ? {uri: item?.exercise_image}
              : appImages.sample_exercise
          }
          selected={item.selected}
          name={`${item?.name} (${item?.category})`}
          paddingHorizontal={WP('5')}
          onSelectionChange={onSelectionChange}
          item={item}
        />
      </View>
    );
  };

  const onFilterSave = () => {
    setFilterExcersice(false);
    setSelectedCategory(selected_category);
    setSelectedBody(selected_bodyPart);

    // dispatch(set_filtered_exercise_request(filtered_exercises));
  };
  const renderSectionHeader = ({section: {title}}) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{title}</Text>
      </View>
    );
  };

  const getExercises = async () => {
    try {
      const checkInternet = await checkConnected();
      if (checkInternet) {
        setisLoading(true);
        const getExerciseSuccess = res => {
          console.log('[Excercise Events]', res);
          const exerciseArray = res?.exercises;
          if (exerciseArray.length > 0) {
            const myExerciseArray = exerciseArray?.map((item, index) => {
              item?.data?.map((data, i) => {
                item.data[i]['selected'] = false;
                item.data[i]['parent_category'] = item.title;
              });
              return item;
            });
            setSectionListData(myExerciseArray);
            setSectionListTempData(myExerciseArray);
            setisLoading(false);
          }
        };
        //On get upcoming event failure
        const getExerciseFailure = res => {
          let msg = responseValidator(
            error?.response?.status,
            error?.response?.data,
          );
          Alert.alert('Error', msg);
          setisLoading(false);
        };

        const form = new FormData();
        form.append(
          'q[category_eq]',
          selectedCategory ? selectedCategory?.title : '',
        );
        form.append(
          'q[exercise_type_eq]',
          selectedBody ? selectedBody?.title : '',
        );
        form.append('q[m]', 'or');
        fetch(`${BASE_URL}/exercises/filter_exercise.json`, {
          method: 'POST',
          body: form,
          headers: {
            'X-My-Custom-Header': 'value-v',
            Authorization: `Bearer ${userInfo?.token}`,
          },
        })
          .then(async res => {
            const response = await res.json();
            dispatch(
              get_exercise_request(
                response,
                getExerciseSuccess,
                getExerciseFailure,
              ),
            );
          })
          .catch(error => {
            let msg = responseValidator(
              error?.response?.status,
              error?.response?.data,
            );
            Alert.alert('Error', msg);
          });
      } else {
        Alert.alert('Error', 'Check your internet connectivity!');
      }
    } catch (error) {}
  };

  const onPressDone = () => {
    if (selectedItem) {
      const filteredItem = recent_searches.filter(item => {
        if (item?.id != selectedItem?.id) {
          return true;
        }
      });

      dispatch(
        set_exercise_recent_search_request(
          filteredItem ? [...filteredItem, selectedItem] : recent_searches,
          () => {
            navigation?.navigate('AddReps');
          },
        ),
      );
    } else {
      Alert.alert('Message!', 'Please select at least one exercise');
    }
  };
  const onPressCategoryClear = () => {
    setSelectedCategory(null);
    dispatch(select_category_filter_request({}));
  };
  const onPressBodyClear = () => {
    setSelectedBody(null);
    dispatch(select_body_filter_request({}));
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader
          icon={appIcons.backArrow}
          title={'Add Exercise'}
          subtitle={'Save'}
        />
        <View style={styles.itemContainer}>
          <SearchBar
            placeholder={'Search...'}
            onPressFilter={() => {
              getFilteredItems();
            }}
            onChangeText={text => onChangeSearchText(text)}
            onPressDots={() => {
              addExerciseSheetRef.current.show();
            }}
          />
          <View style={styles.flatlistWrap}>
            {selectedCategory?.title && (
              <View style={[spacing.mr1, spacing.my1]}>
                <FilterItem
                  clearButton={true}
                  title={selectedCategory?.title}
                  selected={true}
                  onPress={onPressCategoryClear}
                />
              </View>
            )}
            {selectedBody?.title != undefined && (
              <View style={[spacing.mr1, spacing.my1]}>
                <FilterItem
                  clearButton={true}
                  title={selectedBody?.title}
                  selected={true}
                  onPress={onPressBodyClear}
                />
              </View>
            )}
          </View>
          {recent_searches != '' ? (
            <View style={[spacing.my3]}>
              <PrimaryHeading
                onPressSubtitle={() => {
                  dispatch(
                    set_exercise_recent_search_request([], () => {
                      console.log('Search Reset');
                    }),
                  );
                }}
                title={'Recent Search'}
                subtitle={'Remove'}
              />
            </View>
          ) : null}
          <View
            style={[
              styles.sectionlistStyle,
              {
                flex:
                  recent_searches != ''
                    ? recent_searches.length > 1
                      ? 0.5
                      : 0.2
                    : 0,
              },
            ]}>
            <FlatList
              data={recent_searches}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View style={[spacing.py2]}>
                    <ExcerciseCard
                      type={item?.exercise_type}
                      icon={
                        item?.exercise_image
                          ? {uri: item?.exercise_image}
                          : appImages.sample_exercise
                      }
                      name={`${item?.name} (${item?.category})`}
                      paddingHorizontal={WP('5')}
                      onSelectionChange={d => {
                        setSelectedItem(item);
                      }}
                      selected={item?.id == selectedItem?.id ? true : false}
                      item={item}
                    />
                  </View>
                );
              }}
            />
          </View>
          <View style={styles.sectionlistStyle}>
            <SectionList
              sections={sectionListData}
              keyExtractor={(item, index) => item + index}
              renderItem={renderItem}
              renderSectionHeader={renderSectionHeader}
            />
          </View>
          <View style={styles.selectionBtn}>
            <SelectButton
              onPress={() => {
                onPressDone();
              }}
            />
          </View>
        </View>
      </View>
      {filterExcersice && (
        <ExerciseFilter
          onPressBody={onPressSelectedBody}
          onPressCategory={onPressSelectedCategory}
          filterCategory={categoryFilteredArray}
          filterBody={bodyFilteredArray}
          show={filterExcersice}
          onPressHide={() => {
            setFilterExcersice(false);
          }}
          onPressSave={onFilterSave}
          selected_Category={selected_category}
          selected_bodyPart={selected_bodyPart}
        />
      )}
      <AddNewExercise
        show={addExerciseSheetRef}
        onPressHide={() => {
          addExerciseSheetRef?.current?.hide();
        }}
        title={'Create Exercise'}
        onAddPress={() => {
          addExerciseSheetRef?.current?.hide();
          navigation?.navigate('AddNewExercise');
        }}
        icon={appIcons.plus}
        bgColor={colors.white}
        textColor={colors.b7}
        borderleftRadius={15}
        borderRightRadius={15}
      />
      {<Loader loading={isLoading} />}
    </SafeAreaView>
  );
};

export default AddExcercise;
