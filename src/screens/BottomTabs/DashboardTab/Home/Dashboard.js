import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {AppHeader, HomeCircle, HomeHeader} from '../../../../components';
import {
  appIcons,
  capitalizeFirstLetter,
  convertNumberSystem,
} from '../../../../shared/exporter';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {
  get_lifted_weight_request,
  set_exercise_screen_request,
} from '../../../../redux/actions';

const Dashboard = ({navigation}) => {
  const isFocus = useIsFocused(null);

  //Redux States
  const {userInfo} = useSelector(state => state?.auth);
  const {userData} = useSelector(state => state?.profile);
  const {lifted_weight} = useSelector(state => state?.exercise);
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch(null);

  //Get Wieght Lifted
  useEffect(() => {
    if (isFocus) {
      gettotalWeight();
    }
  }, [isFocus]);

  //Get Lifted Weight
  const gettotalWeight = () => {
    setisLoading(true);
    //Get Lifted Weight Succees
    const getWeightSuccess = res => {
      console.log('Total Weight Lifted', res);
      setisLoading(false);
    };
    //Get Lifted Weight Failure
    const getWeightFailure = res => {
      setisLoading(false);
      console.log(res);
    };
    dispatch(get_lifted_weight_request(getWeightSuccess, getWeightFailure));
  };
  console.log(lifted_weight);
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <HomeHeader
          title={'Welcome Back'}
          subtitle={`${
            capitalizeFirstLetter(userData?.first_name) ||
            capitalizeFirstLetter(userInfo?.user?.first_name)
          } ${
            capitalizeFirstLetter(userData?.last_name) ||
            capitalizeFirstLetter(userInfo?.user?.last_name)
          }`}
          icon={appIcons.notification}
          onPressBtn={() => {
            navigation?.navigate('NotificationList');
          }}
        />
        <View style={styles.itemView}>
          <HomeCircle
            icon={appIcons.plus}
            title={convertNumberSystem(lifted_weight) || 0}
            isLoading={isLoading}
            subtitle={'Total Pounds Lifted'}
            onPressAdd={() => {
              dispatch(
                set_exercise_screen_request(true, () => {
                  navigation?.navigate('ExerciseStack');
                }),
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
