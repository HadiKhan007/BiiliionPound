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
  const renderItem = ({item}) => {
    return (
      <View style={spacing.py2}>
        <ExcerciseCard
          type={item?.type}
          icon={item?.icon}
          name={item?.name}
          onPressCard={() => {
            setonSuccess(true);
          }}
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
                        navigation?.navigate('AddReps');
                      }}
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
      {onSuccess && (
        <ActivitySuccess
          name={'John Doe'}
          type={'Shoulder'}
          weight={'150LBS'}
          excercise={'2x Front Raises'}
          mode={'Front Raises'}
          show={onSuccess}
          onPressHide={() => {
            setonSuccess(false);
          }}
          cardIcon={appImages.sample_exercise}
        />
      )}
    </SafeAreaView>
  );
};

export default AddExcercise;
