import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  colors,
  family,
  appIcons,
  HP,
  textSize,
  scrWidth,
  size,
  WP,
  capitalizeFirstLetter,
} from '../../../shared/exporter';
import PropTypes from 'prop-types';
import {Image} from 'react-native-elements';
export const ProfileImage = ({
  profileUri,
  onPressIcon,
  errors,
  onChange,
  value,
  icon,
  title,
}) => {
  return (
    <>
      <View style={styles.container}>
        <Image
          progressiveRenderingEnabled={true}
          source={{
            uri:
              profileUri != null
                ? profileUri
                : 'https://unsplash.it/400/400?image=1',
          }}
          style={styles.imageStyle}
        />
        {icon && (
          <TouchableOpacity onPress={onPressIcon} style={[styles.btnContainer]}>
            <Image source={icon} style={styles.iconStyle} />
          </TouchableOpacity>
        )}
      </View>
      {title && (
        <Text style={styles.titleStyle}>{capitalizeFirstLetter(title)}</Text>
      )}
    </>
  );
};
ProfileImage.propTypes = {
  onPress: PropTypes.func,
  profileUri: PropTypes.string,
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: colors.g1,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
  },
  btnContainer: {
    borderRadius: 100,
    position: 'absolute',
    backgroundColor: colors.g11,
    bottom: 0,
    right: 0,
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    height: 19,
    width: 16,
    resizeMode: 'contain',
  },
  titleStyle: {
    marginTop: WP('5'),
    color: colors.b1,
    fontSize: size.h6,
    fontFamily: family.OpenSans_Medium,
  },
});
