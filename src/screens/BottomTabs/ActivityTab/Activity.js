import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import styles from './styles';
import {ActivityCard, AppHeader, PeriodModal, Title} from '../../../components';
import {
  appIcons,
  appImages,
  checkConnected,
  spacing,
} from '../../../shared/exporter';
import {useDispatch} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

const Activity = ({navigation}) => {
  // State Declaration
  const [selectPeriod, setselectPeriod] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch(null);
  //References
  const periodSheetRef = useRef(null);

  useFocusEffect(
    useCallback(() => {
      getActivityData();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [navigation]),
  );

  const getActivityData = async () => {
    setLoading(true);
    const checkInternet = await checkConnected();

    const cbSuccess = res => {
      console.log('===============terms & conditions=====================');
      console.log(res);
      console.log('====================================');
      setLoading(false);
    };

    const cbFailure = message => {
      setLoading(false);
    };

    if (checkInternet) {
      // dispatch(getTermsNConditions(cbSuccess, cbFailure));
    } else {
      setLoading(false);
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  const getFilteredData = async () => {
    setLoading(true);
    const checkInternet = await checkConnected();

    const cbSuccess = res => {
      console.log('===============terms & conditions=====================');
      console.log(res);
      console.log('====================================');
      setLoading(false);
    };

    const cbFailure = message => {
      setLoading(false);
    };

    if (checkInternet) {
      // dispatch(getTermsNConditions(cbSuccess, cbFailure));
    } else {
      setLoading(false);
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader title={'Activity'} />
        <View style={{flex: 1}}>
          <View style={styles.headerContainer}>
            <Title title={'Activity'} />
            <TouchableOpacity
              onPress={() => {
                periodSheetRef.current.show();
              }}
              style={styles.btnContainer}>
              <Text style={styles.textStyle}>Weekly</Text>
              <Image source={appIcons.downArrow} style={styles.imageStyle} />
            </TouchableOpacity>
          </View>

          <FlatList
            data={[1, 2, 3, 4]}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={spacing.py2}>
                  <ActivityCard
                    name={'John Doe'}
                    type={'Shoulder'}
                    weight={'150LBS'}
                    excercise={'2x Front Raises'}
                    mode={'Front Raises'}
                    cardIcon={appImages.sample_exercise}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
      <PeriodModal
        show={periodSheetRef}
        onPressHide={() => {
          periodSheetRef?.current?.hide();
        }}
        setPeriod={item => {
          setselectPeriod(item);
        }}
        selectedPeriod={selectPeriod}
      />
    </SafeAreaView>
  );
};

export default Activity;
