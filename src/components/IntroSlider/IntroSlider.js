import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {
  appImages,
  colors,
  family,
  HP,
  size,
  video_url,
} from '../../shared/exporter';
import Video from 'react-native-video';

const IntroSlider = ({item, isVideo = false, index}) => {
  //Video
  if (item.key === 1) {
    return (
      <View style={{flex: 1}}>
        <Video
          repeat
          source={{uri: video_url}}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
          }}
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
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.text}</Text>
        </View>
      </View>
    );
  }
  //Company bio
  if (item.key === 5) {
    return (
      <ImageBackground style={styles.pic} source={item.image}>
        <View style={{backgroundColor: 'rgba(0,0,0,0.4)', height: '100%'}}>
          <View style={[styles.textContainer, {flex: 1, marginTop: HP('30')}]}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.text}</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
  return (
    <View style={styles.main}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.text}</Text>
      </View>
      <View style={styles.picContainer}>
        <Image source={item.image} resizeMode={'contain'} style={styles.pic} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.introSliderColor,
  },
  textContainer: {
    flex: 0.5,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    marginTop: HP('4'),
  },
  picContainer: {
    flex: 1,
  },
  title: {
    color: colors.white,
    fontFamily: family.OpenSans_Bold,
    fontSize: size.h6,
  },
  desc: {
    color: colors.white,
    fontFamily: family.OpenSans_SemiBold,
    marginTop: HP('2'),
    fontSize: size.small,
  },
  pic: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
});

export {IntroSlider};
