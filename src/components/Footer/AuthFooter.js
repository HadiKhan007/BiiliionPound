import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import {
  appIcons,
  colors,
  family,
  HP,
  size,
  spacing,
} from '../../shared/exporter';
import PropTypes from 'prop-types';
import {Button} from '../../components';
import {Loader} from '../Loader';
import {AppleButton} from '@invertase/react-native-apple-authentication';

export const AuthFooter = ({
  title,
  subtitle,
  onPressBtn,
  buttonTxt,
  onPressText,
  onApplePress,
  onGooglePress,
  loading,
  disabled,
}) => {
  return (
    <View style={styles.btnContainer}>
      {loading && <Loader loading={loading} />}
      <Button disabled={disabled} onPress={onPressBtn} title={buttonTxt} />
      <View style={styles.container}>
        <View style={styles.line1Container}>
          <View style={styles.line1Style} />
          <View>
            <Text style={styles.linetext}>Or</Text>
          </View>
          <View style={styles.line2Style} />
        </View>
        <View style={styles.cardView}>
          <TouchableOpacity
            disabled={loading}
            onPress={onGooglePress}
            style={styles.cardContainer}>
            <Image source={appIcons.google} style={styles.icon18} />
          </TouchableOpacity>
          {Platform.OS === 'ios' && (
            <TouchableOpacity disabled={loading} style={styles.cardContainer}>
              <AppleButton
                buttonStyle={AppleButton.Style.WHITE}
                buttonType={AppleButton.Type.SIGN_IN}
                style={styles.icon45}
                onPress={onApplePress}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={spacing.mb5}>
          <Text style={styles.footertext}>
            {title}{' '}
            <Text onPress={onPressText} style={styles.footertext1}>
              {subtitle}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
AuthFooter.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onPressText: PropTypes.func,
  buttonTxt: PropTypes.string,
  onPressBtn: PropTypes.func,
  onApplePress: PropTypes.func,
  onGooglePress: PropTypes.func,
  loading: PropTypes?.bool,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  line1Style: {
    flex: 1,
    height: 1,
    backgroundColor: colors.g8,
  },
  line2Style: {
    flex: 1,
    height: 1,
    backgroundColor: colors.g8,
  },
  line1Container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linetext: {
    width: 50,
    textAlign: 'center',
    fontSize: size.tiny,
    color: colors.b7,
    fontFamily: family.OpenSans_Regular,
  },
  cardContainer: {
    height: 50,
    width: 50,
    borderWidth: 0.8,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderColor: colors.g8,
  },
  cardView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 30,
  },
  icon18: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
  icon24: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  icon45: {
    width: 45, // You must specify a width
    height: 45, // You must specify a height
  },
  footertext: {
    textAlign: 'center',
    fontFamily: family.OpenSans_Regular,
    fontSize: size.xsmall,
    color: colors.b7,
  },
  footertext1: {
    color: colors.p1,
    fontSize: size.xsmall,
    fontFamily: family.OpenSans_Medium,
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
  },
});
