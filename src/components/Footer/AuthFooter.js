import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appIcons, colors, family, size, spacing} from '../../shared/exporter';
import PropTypes from 'prop-types';

export const AuthFooter = ({title, subtitle, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.line1Container}>
        <View style={styles.line1Style} />
        <View>
          <Text style={styles.linetext}>Or</Text>
        </View>
        <View style={styles.line2Style} />
      </View>
      <View style={styles.cardView}>
        <View style={styles.cardContainer}>
          <Image source={appIcons.google} style={styles.icon18} />
        </View>
        <View style={styles.cardContainer}>
          <Image source={appIcons.apple} style={styles.icon24} />
        </View>
      </View>
      <View style={spacing.mb5}>
        <Text style={styles.footertext}>
          {title}{' '}
          <Text onPress={onPress} style={styles.footertext1}>
            {subtitle}
          </Text>
        </Text>
      </View>
    </View>
  );
};
AuthFooter.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
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
});
