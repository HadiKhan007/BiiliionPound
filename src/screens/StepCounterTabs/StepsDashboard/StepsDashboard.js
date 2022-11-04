import {
  Alert,
  Image,
  NativeModules,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './styles';
import {HomeHeader, Loader, StepsCircle} from '../../../components';
import {
  appIcons,
  capitalizeFirstLetter,
  checkConnected,
  IOS,
} from '../../../shared/exporter';
import {
  accelerometer,
  SensorTypes,
  setUpdateIntervalForType,
} from 'react-native-sensors';
import {
  getUserInfoRequest,
  userModeRequest,
} from '../../../redux/actions/auth-actions/auth-action';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import moment from 'moment';
import {Dropdown} from 'react-native-element-dropdown';
import {pedometerRequest} from '../../../redux/actions';

//iOS Pedomter Native Module
import {RCTPedometerModule} from '../../../shared/pedometer-module/PedometerService';

setUpdateIntervalForType(SensorTypes.accelerometer, 400);

const StepsDashboard = ({navigation}) => {
  const dispatch = useDispatch(null);
  const {userWithMode} = useSelector(state => state?.auth);
  const {userInfo} = useSelector(state => state?.auth);
  const {userData} = useSelector(state => state?.profile);

  const [value, setValue] = useState(
    userWithMode?.user?.mode === 'pedometer' ? 'step-mode' : null,
  );
  const [modes, setModes] = useState([
    {label: 'Billion Pounds  (weight mode)', value: 'weight-mode'},
    {label: ' Billion Steps (step mode)', value: 'step-mode'},
  ]);
  const [xAcceleration, setXAcceleration] = useState(0);
  const [yAcceleration, setYAcceleration] = useState(0);
  const [zAcceleration, setZAcceleration] = useState(0);
  const [magnitudePrevious, setMagnitudePrevious] = useState(0);
  const [isLoading, setisLoading] = useState(false);
  const [userPersonalInfo, setUserPersonalInfo] = useState(null);
  const [stepsGoal, setStepsGoal] = useState(0);

  const [miles, setMiles] = useState(0);
  const [caloriesBurn, setCaloriesBurn] = useState(0);
  const [walkTime, setWalkTime] = useState(null);
  const [now, setNow] = useState(null);
  const [then, setThen] = useState(null);

  const [steps, setSteps] = useState(0);
  const [play, setPlay] = useState(false);
  const [disableEndWork, setDisableEndWork] = useState(true);
  const [sensitivity, setSensitivity] = useState(null);

  useEffect(() => {
    if (IOS) {
      console.log('[Inside iOS Native Module Code]');
      RCTPedometerModule.isPedometerAvaialble(res => {
        console.log('[res]', res);
      });
    }
  }, []);

  // useEffect(() => {
  //   if (steps == stepsGoal) {
  //     Alert.alert(
  //       'Great',
  //       'You have completed your goal steps\nClick proceed button to cotinue OR endwork',
  //       [
  //         {text: 'PROCEED'},
  //         {
  //           text: 'ENDWORKOUT',
  //           onPress: () => {
  //             onEndWorkOut();
  //           },
  //         },
  //       ],
  //     );
  //   }
  // }, [steps]);

  useEffect(() => {
    if (userWithMode?.user?.mode === 'pedometer') {
      setValue('step-mode');
    } else {
      setValue('weight-mode');
    }
  }, [userWithMode?.user?.mode]);

  useFocusEffect(
    useCallback(() => {
      getPersonalInfomation();
      return () => {};
    }, [navigation]),
  );

  //Android Pedometer Code
  useEffect(() => {
    if (play) {
      const subscription = accelerometer
        .pipe(data => data)
        .subscribe(speed => {
          console.log('Sensor Speed--', speed);
          setXAcceleration(speed.x);
          setYAcceleration(speed.y);
          setZAcceleration(speed.z);
        });
      return () => {
        subscription.unsubscribe();
      };
    } else {
      calculateVariations();
    }
  }, [play]);

  //Android Pedometer Code
  useEffect(() => {
    const magnitude = Math.sqrt(
      Math.pow(xAcceleration, 2) +
        Math.pow(yAcceleration, 2) +
        Math.pow(zAcceleration, 2),
    );
    const magnitudeDelta = magnitude - magnitudePrevious;
    setMagnitudePrevious(() => magnitude);

    // Handle sensitivity
    if (sensitivity === 'low') {
      if (magnitudeDelta > 5) {
        console.log('Low');
        setSteps(prevSteps => prevSteps + 1);
        calculateVariations();
      }
    } else if (sensitivity === 'medium') {
      if (magnitudeDelta > 3) {
        console.log('Medium');
        setSteps(prevSteps => prevSteps + 1);
        calculateVariations();
      }
    } else {
      if (magnitudeDelta > 2) {
        console.log('Fast');
        setSteps(prevSteps => prevSteps + 1);
        calculateVariations();
      }
    }
  }, [xAcceleration, yAcceleration, zAcceleration]);

  //Android Pedometer Code
  const calculateVariations = () => {
    let strideLength = userPersonalInfo?.gender === 'male' ? 2.5 : 2.2;
    let stepsFt = strideLength * steps;
    var distanceCovered = steps / 1300;
    var walkingDistance = distanceCovered.toFixed(3);
    var calories = walkingDistance * 60;
    setCaloriesBurn(parseFloat(calories).toFixed(3));
    // console.log('calories burn--', calories);

    const stepsInMiles = stepsFt / 5280;
    setMiles(parseFloat(stepsInMiles).toFixed(3));
    // console.log('steps in Miles--', stepsInMiles);

    var duration = moment.duration(now?.diff(then));
    var asSeconds = duration.asSeconds();
    const time = moment.utc(asSeconds * 1000).format('mm:ss');
    // console.log('formatted-', time);
    setWalkTime(time);
  };

  const getPersonalInfomation = async () => {
    const checkInternet = await checkConnected();
    if (checkInternet) {
      setisLoading(true);
      const getSuccess = res => {
        // console.log(res?.personalinfo?.step_goals);
        if (res?.personalinfo) {
          setUserPersonalInfo(res?.personalinfo);
          setStepsGoal(res?.personalinfo?.step_goals || 0);
          setSensitivity(res?.personalinfo?.sensitivity);
        }
        setisLoading(false);
      };
      //Get Lifted Weight Failure
      const getFailure = res => {
        console.log(res);
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

  const updateMode = async value => {
    const checkInternet = await checkConnected();
    if (checkInternet) {
      setisLoading(true);
      dispatch(userModeRequest(value, userInfo?.token, onSuccess, onFailure));
    } else {
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  const onSuccess = async res => {
    setisLoading(false);
    console.log(res);
    setisLoading(false);
    if (res?.user != undefined) {
      if (res?.user?.mode === 'exercise') {
        navigation.reset({
          index: 0,
          routes: [{name: 'App'}],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'StepsMainFlow'}],
        });
      }
    } else {
      Alert.alert('Failed', res?.message || 'Select mode Failed');
    }
  };

  const onFailure = res => {
    console.log('failure response--', res);
    setisLoading(false);
    Alert.alert('Failed', res?.message || 'Select mode Failed');
  };

  //On Submit Login Form
  const onEndWorkOut = async () => {
    const checkInternet = await checkConnected();
    if (checkInternet) {
      setisLoading(true);
      const requestBody = {
        user_steps: {
          // "event_id": 67,
          pedometers_attributes: [
            {
              steps: steps,
              miles: miles,
              calories: caloriesBurn,
              walk_time: walkTime,
            },
          ],
        },
      };
      dispatch(
        pedometerRequest(
          requestBody,
          userInfo?.token,
          onPedometerSuccess,
          onPedometerFailure,
        ),
      );
    } else {
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  //pedometer Success
  const onPedometerSuccess = async res => {
    setisLoading(false);
    console.log(res);
    Alert.alert('Success', 'Your steps data saved successfully', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          setSteps(0);
          setCaloriesBurn(0);
          setMiles(0);
          setWalkTime(null);
          setPlay(false);
        },
      },
    ]);
  };

  //pedometer Failure
  const onPedometerFailure = res => {
    setisLoading(false);
    Alert.alert('Failed', res?.message || 'Steps counts Failed');
  };

  //Play and pause counter
  const onPressPlayPause = () => {
    setPlay(!play);
    if (play) {
      setDisableEndWork(false);
      setNow(moment());
    } else {
      setDisableEndWork(true);
      setThen(moment());
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <HomeHeader
          title={'Welcome Back'}
          icon={appIcons.notificationIcon}
          subtitle={`${
            capitalizeFirstLetter(userData?.first_name || '') ||
            capitalizeFirstLetter(userInfo?.user?.first_name || '')
          } ${
            capitalizeFirstLetter(userData?.last_name || '') ||
            capitalizeFirstLetter(userInfo?.user?.last_name || '')
          }`}
          onPressBtn={() => {
            // navigation?.navigate('NotificationList');
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.titleStyle}>{`Mode`}</Text>
            <Dropdown
              style={[styles.dropDownStyle]}
              placeholderStyle={styles.placeholder}
              selectedTextStyle={styles.selectedTextStyle}
              data={modes}
              labelField="label"
              valueField="value"
              placeholder={'Choose'}
              value={value}
              onChange={item => {
                updateMode(item.value);
              }}
            />
          </View>
          <View style={styles.itemView}>
            <StepsCircle
              icon={appIcons.plus}
              title={steps || `0`}
              subtitle={`/${stepsGoal} steps` || '/1000 steps'}
              onPressPlayPause={onPressPlayPause}
              playPauseStatus={play}
              onPressEnd={onEndWorkOut}
              disableEndWorkBtn={disableEndWork}
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
                  <Text style={styles.count}>{walkTime || '00:00'}</Text>
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
