import React, {useEffect} from 'react';
import {Image, StatusBar, SafeAreaView} from 'react-native';
import styles from './styles';
import {appLogos} from '../../shared/theme/assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      // navigation.replace('Walkthrough');
    }, 2500);
  }, []);

  return (
    <>
      <StatusBar hidden />
      <SafeAreaView style={styles.rootContainer}>
        <Image
          source={appLogos.appLogo}
          style={styles.imageStyles}
          resizeMode="contain"
        />
      </SafeAreaView>
    </>
  );
};

export default Splash;
