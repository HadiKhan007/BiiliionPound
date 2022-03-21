import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {AppHeader, ParaBox} from '../../components';
import {appIcons} from '../../shared/exporter';
import {FlatList} from 'react-native-gesture-handler';
const Terms = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader icon={appIcons.backArrow} title={'Term & Conditions'} />
        <FlatList
          data={[1, 2]}
          renderItem={({item}) => {
            return <ParaBox />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Terms;
