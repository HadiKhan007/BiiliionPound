import {Dimensions, PixelRatio} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const scrWidth = Dimensions.get('window').width;
const scrHeight = Dimensions.get('window').height;
const widthPercentageToDP = widthPercent => {
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((scrWidth * elemWidth) / 100);
};
const heightPercentageToDP = heightPercent => {
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((scrHeight * elemHeight) / 100);
};

export {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
  RFValue as RF,
  scrWidth,
  scrHeight,
};
