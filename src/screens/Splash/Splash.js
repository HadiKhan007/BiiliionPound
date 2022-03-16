import React, {useEffect} from 'react';
import {Image, StatusBar, SafeAreaView} from 'react-native';
import styles from './styles';
import {appLogos} from '../../shared/theme/assets';
import {useSelector} from 'react-redux';

const Splash = ({navigation}) => {
  const {walkthrough, userInfo} = useSelector(state => state.auth);
  useEffect(() => {
    setTimeout(() => {
      if (userInfo?.user == null) {
        if (walkthrough?.skip) {
          navigation.replace('Auth');
        } else {
          navigation.replace('GettingStarted');
        }
      } else {
        navigation.replace('App');
      }
    }, 2500);
  }, []);

  return (
    <>
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
