import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import styles from './styles';
import {
  AppHeader,
  SearchBar,
  ExcerciseCard,
  ExerciseFilter,
  PrimaryHeading,
} from '../../../../components';
import {appIcons, appImages, spacing} from '../../../../shared/exporter';
import {FlatList} from 'react-native-gesture-handler';
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
  useEffect(() => {});
  const onPressSelectedItem = item => {
    setselectedItem(item);
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
          <View style={spacing.px2}>
            <PrimaryHeading title={'Recent Search'} subtitle={'remove'} />
          </View>
          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={({item}) => {
              return (
                <View style={{marginVertical: 10}}>
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
    </SafeAreaView>
  );
};

export default AddExcercise;
