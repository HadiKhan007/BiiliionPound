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
// import CircularProgress from 'react-native-circular-progress-indicator';

const slides = [
  {
    key: 1,
    title: 'Track Your Goal',
    text: `Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals`,
    image: appImages.slider1,
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Your Personal Journal',
    text: 'Keep growing your total! Every time you input a new workout, your total goes up!',
    image: appImages.slider1,
    backgroundColor: '#59b2ab',
  },
  {
    key: 3,
    title: 'Join Events',
    text: 'Grab your favorite event and set your total lifted amount on that event.',
    image: appImages.slider2,
    backgroundColor: '#febe29',
  },
  {
    key: 4,
    title: 'Get Your Billion Pound Medallion',
    text: ' At the end of every event you complete you will receive a collectible medallion. ',
    image: appImages.slider3,
    backgroundColor: '#22bcb5',
  },
  {
    key: 5,
    title: 'About Company',
    text: 'Save other peoples during natural disaster and help them',
    image: appImages.slider4,
    backgroundColor: '#22bcb5',
  },
];

const Walkthrough = ({navigation}) => {
  const [progressValue, setProgressValue] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setProgressValue(30);
  }, []);
  const onLoad = () => {
    setOpacity(0);
  };
  const onBuffer = ({isBuffering}) => {
    const isbuffer = isBuffering ? 1 : 0;
    setOpacity(isbuffer);
  };
  const onLoadStart = () => {
    setOpacity(1);
  };
  const renderItem = ({item, index}) => {
    return (
      <IntroSlider
        item={item}
        index={index}
        opacity={opacity}
        onLoad={onLoad}
        onBuffer={onBuffer}
        onLoadStart={onLoadStart}
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
          dispatch(setWalkthrough(body));
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
