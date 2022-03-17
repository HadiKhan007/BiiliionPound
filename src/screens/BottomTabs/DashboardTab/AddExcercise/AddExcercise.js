import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Text, View} from 'react-native';
import styles from './styles';
import {
  AppHeader,
  SearchBar,
  ExcerciseCard,
  ExerciseFilter,
  PrimaryHeading,
  ActivitySuccess,
} from '../../../../components';
import {appIcons, appImages, spacing} from '../../../../shared/exporter';
import AlphabetSectionList from 'react-native-alphabet-sectionlist';

const filterItem = [
  {id: 1, title: 'Core', tick: false},
  {id: 2, title: 'Back', tick: false},
  {id: 3, title: 'Arms', tick: false},
  {id: 4, title: 'Shoulders', tick: false},
  {id: 5, title: 'Chest', tick: false},
  {id: 6, title: 'Legs', tick: false},
  {id: 7, title: 'Full Body', tick: false},
  {id: 8, title: 'Olympic', tick: false},
  {id: 9, title: 'Other', tick: false},
];

const AddExcercise = ({navigation}) => {
  const [filterExcersice, setFilterExcersice] = useState(false);
  const [selectedItem, setselectedItem] = useState(0);
  const sectionListItem = {
    A: [
      {
        name: 'Arnold Press (Dumbbell)',
        icon: appImages.sample_exercise,
        type: 'Shoulder',
      },
      {
        name: 'Arnold Press (Dumbbell)',
        icon: appImages.sample_exercise,
        type: 'Shoulder',
      },
      {
        name: 'Arnold Press (Dumbbell)',
        icon: appImages.sample_exercise,
        type: 'Shoulder',
      },
    ],
    B: [
      {
        name: 'Brnold Press (Dumbbell)',
        icon: appImages.sample_exercise,
        type: 'Shoulder',
      },
      {
        name: 'Brnold Press (Dumbbell)',
        icon: appImages.sample_exercise,
        type: 'Shoulder',
      },
      {
        name: 'Brnold Press (Dumbbell)',
        icon: appImages.sample_exercise,
        type: 'Shoulder',
      },
      {
        name: 'Brnold Press (Dumbbell)',
        icon: appImages.sample_exercise,
        type: 'Shoulder',
      },
    ],
  };
  useEffect(() => {});
  const onPressSelectedItem = item => {
    setselectedItem(item);
  };

  const renderItem = ({item}) => {
    return (
      <View style={spacing.py2}>
        <ExcerciseCard
          type={item?.type}
          icon={item?.icon}
          name={item?.name}
          // isSelected={true}
        />
      </View>
    );
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
          />
          {/* <View style={spacing.px2}>
            <PrimaryHeading title={'Recent Search'} subtitle={'remove'} />
          </View> */}
          {/* <View style={styles.flatListStyle}>
            <FlatList
              data={[1, 2]}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View style={spacing.py2}>
                    <ExcerciseCard
                      type={'Shoulder'}
                      icon={appImages.sample_exercise}
                      name={'Arnold Press (Dumbbell)'}
                      // isSelected={true}
                    />
                  </View>
                );
              }}
            />
          </View> */}
          <View style={styles.sectionlistStyle}>
            <AlphabetSectionList
              showsVerticalScrollIndicator={false}
              data={sectionListItem}
              renderItem={renderItem}
              renderSectionHeader={renderSectionHeader}
            />
          </View>
        </View>
      </View>
      {filterExcersice && (
        <ExerciseFilter
          selectedItem={selectedItem}
          onPressItem={onPressSelectedItem}
          filterItems={filterItem}
          show={filterExcersice}
          onPressHide={() => {
            setFilterExcersice(false);
          }}
        />
      )}
      <ActivitySuccess />
    </SafeAreaView>
  );
};

export default AddExcercise;
