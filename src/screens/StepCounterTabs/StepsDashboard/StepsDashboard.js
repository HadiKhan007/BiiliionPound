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
import {
  accelerometer,
  SensorTypes,
  setUpdateIntervalForType,
} from 'react-native-sensors';

setUpdateIntervalForType(SensorTypes.accelerometer, 400);

const StepsDashboard = ({navigation}) => {
  const [xAcceleration, setXAcceleration] = useState(0);
  const [yAcceleration, setYAcceleration] = useState(0);
  const [zAcceleration, setZAcceleration] = useState(0);
  const [magnitudePrevious, setMagnitudePrevious] = useState(0);
  const [steps, setSteps] = useState(0);

  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (play) {
      const subscription = accelerometer
        .pipe(data => data)
        .subscribe(speed => {
          console.log(speed);
          setXAcceleration(speed.x);
          setYAcceleration(speed.y);
          setZAcceleration(speed.z);
        });
      return () => {
        subscription.unsubscribe();
      };
    }
  }, []);

  useEffect(() => {
    const magnitude = Math.sqrt(
      Math.pow(xAcceleration, 2) +
        Math.pow(yAcceleration, 2) +
        Math.pow(zAcceleration, 2),
    );

    const magnitudeDelta = magnitude - magnitudePrevious;
    setMagnitudePrevious(() => magnitude);
    if (magnitudeDelta > 4) {
      setSteps(prevSteps => prevSteps + 1);
      calculateMiles();
    }
  }, [xAcceleration, yAcceleration, zAcceleration]);

  const calculateMiles = () => {
    let gender = 'male';
    let strideLength = gender === 'male' ? 2.5 : 2.2;
    let steps = strideLength * 500;
    const stepsInMiles = steps / 5280;
    console.log('stepsInMiles', stepsInMiles);
  };

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
              title={steps || `0`}
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
