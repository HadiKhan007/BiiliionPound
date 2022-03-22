import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Text, View} from 'react-native';
import styles from './styles';
import {
  AppHeader,
  SearchBar,
  ExcerciseCard,
  ExerciseFilter,
  PrimaryHeading,
  SelectButton,
} from '../../../../components';
import {
  appIcons,
  appImages,
  filterBody,
  filterCategory,
  spacing,
} from '../../../../shared/exporter';
import AlphabetSectionList from 'react-native-alphabet-sectionlist';
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
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedBody, setSelectedBody] = useState(0);
  const [onSuccess, setonSuccess] = useState(false);

  useEffect(() => {});
  const onPressSelectedBody = item => {
    setSelectedBody(item);
  };
  const onPressSelectedCategory = item => {
    setSelectedCategory(item);
  };
  const renderItem = ({item, index}) => {
    return (
      <View style={[spacing.my2]}>
        <ExcerciseCard
          type={item?.type}
          icon={item?.icon}
          name={item?.name}
          onPressCard={() => {
            setonSuccess(true);
          }}
          isSelected={item?.id == index ? true : false}
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
          <View style={spacing.px2}>
            <PrimaryHeading title={'Recent Search'} subtitle={'remove'} />
          </View>
          <View style={styles.flatListStyle}>
            <FlatList
              data={[1, 2]}
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
          selectedBody={selectedBody}
          onPressBody={onPressSelectedBody}
          selectedCategory={selectedCategory}
          onPressCategory={onPressSelectedCategory}
          filterItems={{body: filterBody, category: filterCategory}}
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
