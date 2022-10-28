import React, {useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import {appIcons, colors} from '../../../../shared/exporter';
import {AppHeader} from '../../../../components';
import ActivityHistoryCard from '../../../../components/Cards/ActivityHistoryCard/ActivityHistoryCard';

const HistoryScreen = () => {
  const [historyData, setHistoryData] = useState([
    {
      id: 0,
      name: 'John Doe',
      steps: '3,8989',
      coverDistance: '200km',
      icon: appIcons.steps,
    },
    {
      id: 1,
      name: 'Chalsey Duke',
      steps: '2,8989',
      coverDistance: '100km',
      icon: appIcons.steps,
    },
  ]);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader
          title={'History'}
          titleColor={colors.b7}
          icon={appIcons.backArrow}
        />
        <View style={styles.headerStyle}></View>
        <FlatList
          showsVerticalScrollIndicator={false}
          horizontal={false}
          data={historyData}
          renderItem={({item}) => {
            return <ActivityHistoryCard item={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HistoryScreen;
