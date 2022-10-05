import {
  Image,
  NativeModules,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {HomeHeader, StepsCircle} from '../../../components';
import {appIcons} from '../../../shared/exporter';

const StepsDashboard = ({navigation}) => {
  const [play, setPlay] = useState(false);

  const onPressPlayPause = () => {
    setPlay(!play);
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <HomeHeader
          title={'Welcome Back'}
          subtitle={'Stefani Wong'}
          icon={appIcons.notification}
          onPressBtn={() => {
            // navigation?.navigate('NotificationList');
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.itemView}>
            <StepsCircle
              icon={appIcons.plus}
              title={`6,000, 000`}
              subtitle={'/1000,000,000 steps'}
              onPressPlayPause={onPressPlayPause}
              playPauseStatus={play}
            />

            <View style={styles.calculationContainer}>
              <View style={styles.calculationInnerContainer}>
                <View style={styles.iconAndTextContainer}>
                  <Image source={appIcons?.mile} style={styles?.icon} />
                  <Text style={styles.count}>{`0.0`}</Text>
                  <Text style={styles.category}>{`mile`}</Text>
                </View>
                <View style={styles.iconAndTextContainer}>
                  <Image source={appIcons?.calories} style={styles?.icon} />
                  <Text style={styles.count}>{`0.0`}</Text>
                  <Text style={styles.category}>{`Calories`}</Text>
                </View>
                <View style={styles.iconAndTextContainer}>
                  <Image source={appIcons?.walkingTime} style={styles?.icon} />
                  <Text style={styles.count}>{`0h.0m`}</Text>
                  <Text style={styles.category}>{`Walking time`}</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default StepsDashboard;
