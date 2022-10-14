import {Alert, Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './styles';
import {HomeHeader, Loader, StepsCircle} from '../../../components';
import {appIcons, checkConnected} from '../../../shared/exporter';
import {
  accelerometer,
  SensorTypes,
  setUpdateIntervalForType,
} from 'react-native-sensors';
import {getUserInfoRequest} from '../../../redux/actions/auth-actions/auth-action';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import moment from 'moment';

setUpdateIntervalForType(SensorTypes.accelerometer, 400);

const StepsDashboard = ({navigation}) => {
  const {userInfo} = useSelector(state => state?.auth);
  const dispatch = useDispatch(null);

  const [xAcceleration, setXAcceleration] = useState(0);
  const [yAcceleration, setYAcceleration] = useState(0);
  const [zAcceleration, setZAcceleration] = useState(0);
  const [magnitudePrevious, setMagnitudePrevious] = useState(0);
  const [isLoading, setisLoading] = useState(false);
  const [userPersonalInfo, setUserPersonalInfo] = useState(null);

  const [miles, setMiles] = useState(0);
  const [caloriesBurn, setCaloriesBurn] = useState(0);
  const [now, setNow] = useState(null);
  const [then, setThen] = useState(null);

  const [steps, setSteps] = useState(0);

  const [play, setPlay] = useState(false);

  useFocusEffect(
    useCallback(() => {
      getPersonalInfomation();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [navigation]),
  );
  useEffect(() => {
    if (play) {
      var now = new Date();
      setNow(now);
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
    } else {
      var then = new Date();
      setThen(then);
      calculateVariations();
    }
  }, [play]);

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
      calculateVariations();
    }
  }, [xAcceleration, yAcceleration, zAcceleration]);

  const calculateVariations = () => {
    let strideLength = userPersonalInfo?.gender === 'male' ? 2.5 : 2.2;
    let stepsFt = strideLength * steps;
    var distanceCovered = steps / 1300;
    var walkingDistance = distanceCovered.toFixed(3);
    var calories = walkingDistance * 60;
    setCaloriesBurn(parseFloat(calories).toFixed(3));
    console.log('calories burn--', calories);

    const stepsInMiles = stepsFt / 5280;
    setMiles(parseFloat(stepsInMiles).toFixed(3));
    console.log('steps in Miles--', stepsInMiles);

    // const walkingTime = moment
    //   .utc(moment(now).diff(moment(then)))
    //   .format('hh:mm:ss');
    // console.log('START TIME IS---', moment(now).format('hh:mm:ss'));
    // console.log('END TIME IS---', moment(then).format('hh:mm:ss'));
    // console.log('walkingTime---', walkingTime);
  };

  const getPersonalInfomation = async () => {
    const checkInternet = await checkConnected();
    if (checkInternet) {
      setisLoading(true);
      const getSuccess = res => {
        if (res?.personalinfo) {
          console.log('Personal Information--', res);
          setUserPersonalInfo(res?.personalinfo);
        }
        setisLoading(false);
      };
      //Get Lifted Weight Failure
      const getFailure = res => {
        setisLoading(false);
        if (res) {
          Alert.alert('Error', res);
        }
      };
      dispatch(getUserInfoRequest(userInfo?.token, getSuccess, getFailure));
    } else {
      Alert.alert('Error', 'Check your internet connectivity!');
    }
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
                  <Text style={styles.count}>{miles || `0.0`}</Text>
                  <Text style={styles.category}>{`mile`}</Text>
                </View>
                <View style={styles.iconAndTextContainer}>
                  <Image source={appIcons?.calories} style={styles?.icon} />
                  <Text style={styles.count}>{caloriesBurn || `0.0`}</Text>
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
      {isLoading && <Loader loading={isLoading} />}
    </SafeAreaView>
  );
};

export default StepsDashboard;
