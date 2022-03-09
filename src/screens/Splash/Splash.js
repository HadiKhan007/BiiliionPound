import React, {useEffect} from 'react';
import {Image, StatusBar, SafeAreaView} from 'react-native';
import styles from './styles';
import {appLogos} from '../../shared/theme/assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GettingStarted');
    }, 2500);
  }, []);

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={'dark-content'}
      />
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
