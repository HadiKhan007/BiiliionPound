import React, {useState} from 'react';
import {Text, View, SafeAreaView, Image, StatusBar} from 'react-native';
import {family} from '../../../shared/exporter';
import styles from './styles';
import {AuthFooter, Button, Checkbox, Input} from '../../../components';
import {colors} from '../../../shared/exporter';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = ({params, navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={'dark-content'}
      />
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

          {/* Signup Footer Part */}
          <FooterBox
            onPress={() => {
              navigation?.navigate('SignUp');
            }}
            title={`Don't have an account?`}
            subtitle={'Register'}
            buttonTxt={'Login'}
            onPressBtn={() => {
              console.log('Coming');
            }}
          />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

const WelcomeBox = ({title, subtitle}) => {
  return (
    <View style={styles.welcomeTextContainer}>
      <Text style={{fontFamily: family.OpenSans_Regular, fontSize: 15}}>
        {title}
      </Text>
      <Text style={{fontFamily: family.OpenSans_Bold, fontSize: 20}}>
        {subtitle}
      </Text>
    </View>
  );
};

const FooterBox = ({title, subtitle, buttonTxt, onPress, onPressBtn}) => {
  return (
    <View style={styles.btnContainer}>
      <Button onPress={onPressBtn} title={buttonTxt} />
      <AuthFooter onPress={onPress} title={title} subtitle={subtitle} />
    </View>
  );
};

export default Login;
