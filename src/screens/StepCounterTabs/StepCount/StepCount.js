import {View, Text, Alert} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {AppHeader, StepsCircle} from '../../../components';
import {appIcons, checkConnected, colors} from '../../../shared/exporter';
import moment from 'moment';
import {
  accelerometer,
  SensorTypes,
  setUpdateIntervalForType,
} from 'react-native-sensors';
import {getUserInfoRequest} from '../../../redux/actions/auth-actions/auth-action';
import {useFocusEffect} from '@react-navigation/native';
import {pedometerRequest} from '../../../redux/actions';
setUpdateIntervalForType(SensorTypes.accelerometer, 400);

const StepCount = ({navigation}) => {
  const {userInfo} = useSelector(state => state?.auth);
  const [isLoading, setisLoading] = useState(false);
  const [steps, setSteps] = useState(0);
  const [play, setPlay] = useState(false);
  const [xAcceleration, setXAcceleration] = useState(0);
  const [yAcceleration, setYAcceleration] = useState(0);
  const [zAcceleration, setZAcceleration] = useState(0);
  const [magnitudePrevious, setMagnitudePrevious] = useState(0);
  const [sensitivity, setSensitivity] = useState(null);

  const [disableEndWork, setDisableEndWork] = useState(true);
  const [stepsGoal, setStepsGoal] = useState(0);
  const [then, setThen] = useState(null);
  const [now, setNow] = useState(null);
  const dispatch = useDispatch(null);
  const {userWithMode} = useSelector(state => state?.auth);
  const [value, setValue] = useState(
    userWithMode?.user?.mode === 'pedometer' ? 'step-mode' : null,
  );

  useFocusEffect(
    useCallback(() => {
      getPersonalInfomation();
      return () => {};
    }, [navigation]),
  );

  useEffect(() => {
    if (play) {
      const subscription = accelerometer
        .pipe(data => data)
        .subscribe(speed => {
          setXAcceleration(speed.x);
          setYAcceleration(speed.y);
          setZAcceleration(speed.z);
        });
      return () => {
        subscription.unsubscribe();
      };
    } else {
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
        setSteps(prevSteps => prevSteps + 1);
      }
    } else if (sensitivity === 'medium') {
      if (magnitudeDelta > 3) {
        setSteps(prevSteps => prevSteps + 1);
      }
    } else {
      if (magnitudeDelta > 2) {
        setSteps(prevSteps => prevSteps + 1);
      }
    }
  }, [xAcceleration, yAcceleration, zAcceleration]);

  const getPersonalInfomation = async () => {
    const checkInternet = await checkConnected();
    if (checkInternet) {
      setisLoading(true);
      const getSuccess = res => {
        if (res?.personalinfo) {
          setStepsGoal(res?.personalinfo?.step_goals || 0);
          setSensitivity(res?.personalinfo?.sensitivity);
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
    if (play) {
      setDisableEndWork(false);
      setNow(moment());
    } else {
      setDisableEndWork(true);
      setThen(moment());
    }
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
              //   miles: miles,
              //   calories: caloriesBurn,
              //   walk_time: walkTime,
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
          //   setCaloriesBurn(0);
          //   setMiles(0);
          //   setWalkTime(null);
          //   setPlay(false);
        },
      },
    ]);
  };

  const onPedometerFailure = res => {
    setisLoading(false);
    Alert.alert('Failed', res?.message || 'Steps counts Failed');
  };

  return (
    <View style={styles.rootContainer}>
      <AppHeader titleColor={colors.b7} icon={appIcons.backArrow} />
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
      </View>
    </View>
  );
};

export default StepCount;
