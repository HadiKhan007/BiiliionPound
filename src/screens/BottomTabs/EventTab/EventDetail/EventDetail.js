import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  AppHeader,
  OngoingEventCard,
  OngoingItem,
  PrimaryHeading,
  UpcomingEventCard,
} from '../../../../components';
import {appIcons, colors, spacing} from '../../../../shared/exporter';

const Event = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader
          title={'Event Details'}
          titleColor={colors.white}
          icon={appIcons.backArrow}
        />
        <View style={styles.itemConatiner}>
          <View style={styles.firstConatiner}>
            <View style={styles.headerContainer}>
              <OngoingItem
                titleStyle={styles.countStyle}
                imageHeight={35}
                imageWidth={35}
                title={'+20 Going'}
              />
            </View>
          </View>
          <ScrollView></ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Event;
