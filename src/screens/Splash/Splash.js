import React from 'react';
import {Image, SafeAreaView} from 'react-native';
import styles from './styles';
import {colors, appIcons} from '../../shared/exporter';

const Splash = ({navigation}) => {
  return (
    <SafeAreaView
      style={[
        styles.main,
        {
          backgroundColor: colors.white,
        },
      ]}>
      <Image
        source={appIcons.appLogo}
        style={styles.imageStyles}
        resizeMode="cover"
      />
    </SafeAreaView>
  );
};

export default Splash;
