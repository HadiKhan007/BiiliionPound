import React from 'react';
import {Text, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '_utilities';
import {Fonts} from '../../../assets/fonts/index';
const Home = ({params}) => (
  <View>
    <Text style={{color: colors.p1, fontFamily: Fonts.OpenSans_ExtraBold}}>
      Home
    </Text>
  </View>
);

export default Home;
