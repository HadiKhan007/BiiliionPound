import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {
  AppHeader,
  ParaBox,
  SearchBar,
  ExcerciseCard,
} from '../../../../components';
import {appIcons, appImages} from '../../../../shared/exporter';
import {FlatList} from 'react-native-gesture-handler';
const AddExcercise = ({navigation}) => {
  useEffect(() => {});
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
              console.log('leoo');
            }}
          />
          <View style={styles.headingContainer}>
            <Text style={styles.recentText}>Recent Search</Text>
            <Text style={styles.removeText}>remove</Text>
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
    </SafeAreaView>
  );
};

export default AddExcercise;
