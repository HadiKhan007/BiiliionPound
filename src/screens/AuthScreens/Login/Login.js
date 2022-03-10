import React, {useState} from 'react';
import {Text, View, SafeAreaView, Image, StatusBar} from 'react-native';
import styles from './styles';
import {AuthFooter, Input, WelcomeBox} from '../../../components';
import {colors} from '../../../shared/exporter';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = ({params, navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <WelcomeBox title={'Hey there,'} subtitle={'Welcome Back!'} />
        {/* Signup Inputs */}
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Email"
              leftIcon={
                <Icon
                  type={'material'}
                  name={'email'}
                  size={22}
                  color={colors.g1}
                />
              }
            />
            <Input
              placeholder="Password"
              secureTextEntry
              leftIcon={
                <Icon
                  type={'material'}
                  name={'lock'}
                  size={22}
                  color={colors.g1}
                />
              }
            />

            {/* App Privacy Checkbox */}
            <Text
              onPress={() => {
                navigation?.navigate('ForgotPassword');
              }}
              style={styles.forgotTxtStyle}>
              Forgot your password?{' '}
            </Text>
          </View>

          {/* Login Footer Part */}
          <AuthFooter
            onPressText={() => {
              navigation?.navigate('SignUp');
            }}
            title={`Don't have an account?`}
            subtitle={'Register'}
            buttonTxt={'Login'}
            onPressBtn={() => {
              navigation?.navigate('App');
            }}
            onApplePress={() => {
              console.log('Apple Login');
            }}
            onGooglePress={() => {
              console.log('Google Login');
            }}
          />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Login;
