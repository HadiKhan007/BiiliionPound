import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Text, View} from 'react-native';
import styles from './styles';
import {AppHeader, FitnessCard, RepsInput} from '../../../../components';
import {appIcons, appImages} from '../../../../shared/exporter';
const AddRaps = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader
          icon={appIcons.backArrow}
          title={'Add Reps'}
          subtitle={'Finish'}
        />
        <View style={styles.topItems}>
          <FitnessCard icon={appImages.sample_exercise} />
          <Text style={styles.title}>Front Raises</Text>
          <Text style={styles.subtitle}>Shoulder</Text>
        </View>
        <View>
          <Text style={styles.header}>Front Raises (Dumbbell)</Text>
          <FlatList
            data={[1, 2]}
            renderItem={({item}) => {
              return <RepsInput />;
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddRaps;
