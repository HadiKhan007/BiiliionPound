import React, {createRef, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import {appImages, colors, HP, video_url} from '../../shared/exporter';
import {IntroSlider, CircularProgress} from '../../components';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {setWalkthrough} from '../../redux/actions';
import Video from 'react-native-video';
import {useIsFocused} from '@react-navigation/native';
// import CircularProgress from 'react-native-circular-progress-indicator';

const title = 'Track Your Goal';
const text = `Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals`;

const VideoIntro = ({navigation}) => {
  const video = useRef(null);
  const [pause, setPause] = useState(false);
  const isFocus = useIsFocused();

  useEffect(() => {
    if (!isFocus) {
      setPause(true);
    }
  }, [!isFocus]);

  return (
    <View style={styles.rootContainer}>
      <Video
        ref={video}
        repeat={true}
        source={appImages.appVideo}
        resizeMode='contain'
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: "transparent",
        }}
        paused={pause}
        playInBackground={false}
        ignoreSilentSwitch={'obey'}
      />
      <View
        style={[
          styles.textContainer,
          {
            flex: 1,
            //  marginTop: HP('30'),
            zIndex: 1,
            position: 'absolute',
            justifyContent: 'center',
            bottom: HP('25'),
          },
        ]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{text}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation?.replace('Walkthrough');
        }}
        style={styles.buttonCircle}>
        <Icon
          name="chevron-forward-outline"
          type={'ionicon'}
          color="white"
          size={24}
        />
      </TouchableOpacity>
    </View>
  );
};

export default VideoIntro;
