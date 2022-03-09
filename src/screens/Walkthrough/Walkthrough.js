import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import {appImages, colors} from '../../shared/exporter';
import {IntroSlider, CircularProgress} from '../../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
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

  useEffect(() => {
    setProgressValue(30);
  }, []);

  const renderItem = ({item, index}) => {
    return <IntroSlider item={item} index={index} />;
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
        onPress={() =>
          navigation.navigate('Auth', {
            screen: 'SignUp',
          })
        }
        style={styles.buttonCircle}>
        <Icon name="checkmark-sharp" type={'ionicon'} color="white" size={24} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={'light-content'}
      />
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

const styles = StyleSheet.create({
  buttonUperContainer: {
    width: 55,
    height: 55,
    backgroundColor: 'transparent',
    borderRadius: 55 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.p1,
    zIndex: 1,
    position: 'absolute',
  },
  buttonOuterContainer: {
    width: 55,
    height: 55,
    backgroundColor: 'transparent',
    // borderRadius: 55 / 2,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 10,
    // borderWidth: 2,
    // borderColor: colors.p6,
  },
  buttonCircle: {
    width: 45,
    height: 45,
    backgroundColor: colors.p1,
    borderRadius: 45 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    //  borderWidth: 1,
  },
  dotStyle: {
    backgroundColor: 'transparent',
  },
});

// export default class Walkthrough extends React.Component {
//   _renderItem = ({item}) => {
//     return (
//       <View style={styles.slide}>
//         <Text style={styles.title}>{item.title}</Text>
//         <Image source={item.image} />
//         <Text style={styles.text}>{item.text}</Text>
//       </View>
//     );
//   };

//   render() {
//     return (
//       <AppIntroSlider
//         data={slides}
//         renderDoneButton={this._renderDoneButton}
//         renderNextButton={this._renderNextButton}
//         renderItem={this._renderItem}
//       />
//     );
//   }
// }
