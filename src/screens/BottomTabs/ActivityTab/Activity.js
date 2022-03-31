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
import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from './styles';
import {
  ActivityCard,
  AppHeader,
  Loader,
  PeriodModal,
  Title,
} from '../../../components';
import {
  appIcons,
  appImages,
  checkConnected,
  spacing,
} from '../../../shared/exporter';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {getActivity, getFilteredActivity} from '../../../redux/actions';

const Activity = ({navigation}) => {
  // State Declaration
  const [selectPeriod, setselectPeriod] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch(null);
  //References
  const periodSheetRef = useRef(null);
  const {activity} = useSelector(state => state.activity);

  useFocusEffect(
    useCallback(() => {
      getActivityData();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [navigation]),
  );

  useEffect(() => {
    console.log('====================================');
    console.log('selected ', selectPeriod);
    console.log('====================================');
    if (selectPeriod != null) {
      getFilteredData();
    }
  }, [selectPeriod]);

  const getActivityData = async () => {
    setLoading(true);
    const checkInternet = await checkConnected();

    const cbSuccess = res => {
      console.log('===============Activity=====================');
      console.log(res);
      console.log('====================================');
      setLoading(false);
    };

    const cbFailure = message => {
      setLoading(false);
    };

    if (checkInternet) {
      dispatch(getActivity(cbSuccess, cbFailure));
    } else {
      setLoading(false);
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  const getFilteredData = async () => {
    console.log('====================================');
    console.log('in filtered');
    console.log('====================================');
    setLoading(true);
    const checkInternet = await checkConnected();

    const cbSuccess = res => {
      console.log('===============FilteredActivity=====================');
      console.log(res);
      console.log('====================================');
      setLoading(false);
    };

    const cbFailure = message => {
      setLoading(false);
    };

    if (checkInternet) {
      dispatch(getFilteredActivity(selectPeriod, cbSuccess, cbFailure));
    } else {
      setLoading(false);
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      {loading ? <Loader loading={loading} /> : null}
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
              <Text style={styles.textStyle}>
                {selectPeriod?.title || 'Today'}
              </Text>
              <Image source={appIcons.downArrow} style={styles.imageStyle} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={activity}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={spacing.py2}>
                  <ActivityCard
                    name={item?.user?.full_name}
                    type={item?.exercise?.exercise_type}
                    weight={'150LBS'}
                    excercise={'2x Front Raises'}
                    mode={item?.exercise?.name}
                    cardIcon={item?.exercise?.exercise_image_url}
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
          console.log('item selected', item?.title);
          setselectPeriod(item);
          getFilteredData();
        }}
        selectedPeriod={selectPeriod}
      />
    </SafeAreaView>
  );
};

export default Activity;
