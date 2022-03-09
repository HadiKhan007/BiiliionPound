import React from 'react';
import {Text, View, ImageBackground, Image, StatusBar} from 'react-native';
import {appImages, appLogos, HP} from '../../shared/exporter';
import {Button} from '../../components';
import styles from './styles';

const GettingStarted = ({navigation}) => {
  return (
    <ImageBackground style={styles.main} source={appImages.gettingStarted}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={'light-content'}
      />
      <View style={styles.logoContainer}>
        <Image
          source={appLogos.appLogoWhite}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Getting Started"
          onPress={() => {
            navigation.navigate('Walkthrough');
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default GettingStarted;
