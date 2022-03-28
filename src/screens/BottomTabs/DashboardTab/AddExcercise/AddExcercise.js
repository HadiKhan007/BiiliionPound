import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, FlatList, Text, View} from 'react-native';
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
} from '../../../../shared/exporter';
import AlphabetSectionList from 'react-native-alphabet-sectionlist';
import FilterItem from '../../../../components/Cards/FilterItem/FilterItem';
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
const AddExcercise = ({navigation}) => {
  const [filterExcersice, setFilterExcersice] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const [recentSearch, setrecentSearch] = useState([1, 2]);
  const [filteredItems, setfilteredItems] = useState([]);
  //References
  const addExerciseSheetRef = useRef(null);

  //Filter Functions
  const onPressSelectedBody = index => {
    filterBody[index].tick = !filterBody[index].tick;
  };
  const onPressSelectedCategory = index => {
    filterCategory[index].tick = !filterBody[index].tick;
  };

  //Render Exercise Cards
  const renderItem = ({item, index}) => {
    return (
      <View style={[spacing.my2]}>
        <ExcerciseCard
          type={item?.type}
          icon={item?.icon}
          name={item?.name}
          onPressCard={() => {
            setSelectedItem(item?.id);
          }}
          isSelected={item?.id == selectedItem ? true : false}
        />
      </View>
    );
  };
  const onFilterSave = () => {
    setfilteredItems([...filterBody, ...filterCategory]);
    setFilterExcersice(false);
  };
  const renderSectionHeader = ({section: {title}}) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{title}</Text>
      </View>
    );
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
              setFilterExcersice(true);
            }}
            onPressDots={() => {
              addExerciseSheetRef.current.show();
            }}
          />
          {filteredItems != '' ? (
            <View>
              <FlatList
                data={[
                  ...new Set(filteredItems.filter(item => item != undefined)),
                ]}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                renderItem={({item, index}) => {
                  return (
                    <View style={spacing.m1}>
                      <FilterItem
                        clearButton={true}
                        title={item?.title}
                        selected={true}
                        onPress={() => {
                          filteredItems[index] = undefined;
                        }}
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
            <View style={spacing.py4}>
              <PrimaryHeading
                onPressSubtitle={() => {
                  setrecentSearch([]);
                }}
                title={'Recent Search'}
                subtitle={'Remove'}
              />
            </View>
          ) : null}

          <View style={{flex: recentSearch != '' ? 0.5 : 0}}>
            <FlatList
              data={recentSearch}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View style={spacing.py2}>
                    <ExcerciseCard
                      onPressCard={() => {
                        // setonSuccess(!onSuccess);
                      }}
                      type={'Shoulder'}
                      icon={appImages.sample_exercise}
                      name={'Arnold Press (Dumbbell)'}
                    />
                  </View>
                );
              }}
            />
          </View>
          <View style={styles.sectionlistStyle}>
            <AlphabetSectionList
              showsVerticalScrollIndicator={false}
              data={sectionListItem}
              renderItem={renderItem}
              hideRightSectionList={true}
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
          filterCategory={filterCategory}
          filterBody={filterBody}
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

export default AddExcercise;
