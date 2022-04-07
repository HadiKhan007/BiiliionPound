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
} from '../../../../components';
import {
  appIcons,
  appImages,
  colors,
  filterBody,
  filterCategory,
  spacing,
  WP,
} from '../../../../shared/exporter';
import AlphabetSectionList from 'react-native-alphabet-sectionlist';
import FilterItem from '../../../../components/Cards/FilterItem/FilterItem';
import {useDispatch, useSelector} from 'react-redux';
import {
  get_exercise_request,
  get_filter_exercise_request,
  select_body_filter_request,
  select_category_filter_request,
  set_body_filtered_request,
  set_category_filtered_request,
} from '../../../../redux/actions';
import {useIsFocused} from '@react-navigation/core';
import {offset} from 'dom-helpers';
const sectionListItem = {
  A: [
    {
      id: 0,
      name: 'Arnold Press (Dumbbell)',
      icon: appImages.sample_exercise,
      type: 'Shoulder',
      selected: false,
    },
    {
      id: 1,

      name: 'Arnold Press (Dumbbell)',
      icon: appImages.sample_exercise,
      type: 'Shoulder',
      selected: false,
    },
    {
      id: 2,

      name: 'Arnold Press (Dumbbell)',
      icon: appImages.sample_exercise,
      type: 'Shoulder',
      selected: false,
    },
  ],
  B: [
    {
      id: 3,
      name: 'Brnold Press (Dumbbell)',
      icon: appImages.sample_exercise,
      type: 'Shoulder',
      selected: false,
    },
    {
      id: 4,

      name: 'Brnold Press (Dumbbell)',
      icon: appImages.sample_exercise,
      type: 'Shoulder',
      selected: false,
    },
    {
      id: 5,

      name: 'Brnold Press (Dumbbell)',
      icon: appImages.sample_exercise,
      type: 'Shoulder',
      selected: false,
    },
    {
      id: 6,

      name: 'Brnold Press (Dumbbell)',
      icon: appImages.sample_exercise,
      type: 'Shoulder',
      selected: false,
    },
  ],
};

const DATA = [
  {
    title: 'A',
    data: [
      {
        id: 0,
        name: 'Arnold Press',
        icon: appImages.sample_exercise,
        type: 'Shoulder',
        selected: false,
        parent_category: 'A',
      },
      {
        id: 1,
        name: 'Brnold Press ',
        icon: appImages.sample_exercise,
        type: 'Shoulder',
        selected: false,
        parent_category: 'A',
      },
      {
        id: 2,
        name: 'Crnold Press ',
        icon: appImages.sample_exercise,
        type: 'Shoulder',
        selected: false,
        parent_category: 'A',
      },
    ],
  },
  {
    title: 'B',
    data: [
      {
        id: 3,
        name: 'drnold Press',
        icon: appImages.sample_exercise,
        type: 'Shoulder',
        selected: false,
        parent_category: 'B',
      },
      {
        id: 4,
        name: 'Ernold Press ',
        icon: appImages.sample_exercise,
        type: 'Shoulder',
        selected: false,
        parent_category: 'B',
      },
      {
        id: 5,
        name: 'Frnold Press ',
        icon: appImages.sample_exercise,
        type: 'Shoulder',
        selected: false,
        parent_category: 'B',
      },
    ],
  },
];

const AddExcercise = ({navigation}) => {
  const [sectionListData, setSectionListData] = useState(DATA);
  const [sectionListTempData, setSectionListTempData] = useState(DATA);

  const [filterExcersice, setFilterExcersice] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const [recentSearch, setrecentSearch] = useState([1, 2]);
  const [filteredItems, setfilteredItems] = useState([1, 2]);
  const isFocus = useIsFocused(null);
  const {categoryFilteredArray, bodyFilteredArray, all_exercise} = useSelector(
    state => state?.exercise,
  );
  const dispatch = useDispatch(null);
  //References
  const addExerciseSheetRef = useRef(null);

  useEffect(() => {
    if (isFocus) {
      getExercises();
    }
  }, [isFocus]);

  //Filter Functions
  const onPressSelectedBody = index => {
    dispatch(select_body_filter_request(index));
  };

  const onPressSelectedCategory = index => {
    dispatch(select_category_filter_request(index));
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
      setSectionListData(DATA);
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
  };

  //Render Exercise Cards
  const renderItem = ({item, index}) => {
    return (
      <View style={[spacing.my2]}>
        <ExcerciseCard
          type={item?.type}
          icon={item?.icon}
          selected={item.selected}
          name={item?.name}
          paddingHorizontal={WP('5')}
          onSelectionChange={onSelectionChange}
          item={item}
        />
      </View>
    );
  };

  const onFilterSave = () => {
    setFilterExcersice(false);
  };

  const renderSectionHeader = ({section: {title}}) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{title}</Text>
      </View>
    );
  };

  const getExercises = async () => {
    const getExerciseSuccess = res => {
      console.log('[Excercise Events]', res);
    };
    //On get upcoming event failure
    const getExerciseFailure = res => {
      Alert.alert('Error', res);
    };
    dispatch(get_exercise_request(getExerciseSuccess, getExerciseFailure));
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
          {filteredItems != '' ? (
            <View>
              <FlatList
                data={[...new Set(filteredItems)]}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                  return (
                    <View style={[spacing.mr1, spacing.my1]}>
                      <FilterItem
                        clearButton={true}
                        title={'Arms'}
                        selected={true}
                      />
                    </View>
                  );
                }}
              />
            </View>
          ) : (
            false
          )}

          {recentSearch != '' ? (
            <View style={[spacing.my3]}>
              <PrimaryHeading
                onPressSubtitle={() => {
                  setrecentSearch([]);
                }}
                title={'Recent Search'}
                subtitle={'Remove'}
              />
            </View>
          ) : null}

          <View
            style={[
              styles.sectionlistStyle,
              {flex: recentSearch != '' ? 0.5 : 0},
            ]}>
            <FlatList
              data={recentSearch}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View style={[spacing.py2]}>
                    <ExcerciseCard
                      onPressCard={() => {
                        // setonSuccess(!onSuccess);
                      }}
                      type={'Shoulder'}
                      icon={appImages.sample_exercise}
                      name={'Arnold Press (Dumbbell)'}
                      paddingHorizontal={WP('5')}
                      onSelectionChange={() => {}}
                      item={item}
                    />
                  </View>
                );
              }}
            />
          </View>
          <View style={styles.sectionlistStyle}>
            {/* <AlphabetSectionList
              showsVerticalScrollIndicator={false}
              data={sectionListItem}
              headerStyle={{paddingHorizontal: WP('5')}}
              renderItem={renderItem}
              hideRightSectionList={true}
              renderSectionHeader={renderSectionHeader}
            /> */}
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
                navigation?.navigate('AddReps');
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
    </SafeAreaView>
  );
};

const Item = ({name}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
  </View>
);

export default AddExcercise;
