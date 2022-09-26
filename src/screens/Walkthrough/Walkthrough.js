import React, {createRef, useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import {appImages, colors} from '../../shared/exporter';
import {IntroSlider, CircularProgress} from '../../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {setWalkthrough} from '../../redux/actions';
import {CommonActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import CircularProgress from 'react-native-circular-progress-indicator';

const slides = [
  {
    key: 1,
    title: 'Your Personal Journal',
    text: 'Not only can you use our app during The Billion Pound Challenge, you can use our app every day of the year to keep your weight lifting information available.',
    image: appImages.slider1,
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Join Events',
    // text: 'Join your favorite team and help them reach their goals for charity!',
    image: appImages.slider5,
    backgroundColor: '#febe29',
  },
  // {
  //   key: 3,
  //   title: 'Get Your Billion Pound Medallion',
  //   // text: 'Once you register for a fund- raising event OR register to use the app as your daily fitness journal... you receive our beautiful TEAM medallion!',
  //   image: appImages.slider3,
  //   backgroundColor: '#22bcb5',
  // },
  // {
  //   key: 4,
  //   title: 'About Company',
  //   // text: 'Join your favorite team and help them reach their goals for charity!',
  //   // image: appImages.slider4,
  //   backgroundColor: '#22bcb5',
  // },
];

const Walkthrough = ({navigation}) => {
  const dispatch = useDispatch(null);
  const renderItem = ({item, index}) => {
    return (
      <IntroSlider
        onPressBack={() => {
          // navigation.goBack();
          navigation?.replace('VideoIntro');
        }}
        item={item}
        index={index}
      />
    );
  };

  const renderNextButton = props => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="chevron-forward-outline"
          type={'ionicon'}
          color="white"
          size={24}
        />
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          const body = {
            skip: true,
          };
          AsyncStorage.setItem('walkthrough', 'true');
          // dispatch(setWalkthrough(body));
          navigation.replace('Auth', {
            screen: 'SignUp',
          });
        }}
        style={styles.buttonCircle}>
        <Icon name="checkmark-sharp" type={'ionicon'} color="white" size={24} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <AppIntroSlider
        data={slides}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.dotStyle}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Walkthrough;
