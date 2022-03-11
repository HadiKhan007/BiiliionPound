import React, {useEffect, useState} from 'react';
import {Text, View, SafeAreaView, Image, StatusBar} from 'react-native';
import styles from './styles';
import {AuthFooter, Input, WelcomeBox} from '../../../components';
import {
  BASE_URL,
  colors,
  emailValidation,
  passwordValidation,
} from '../../../shared/exporter';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {loginRequest} from '../../../redux/actions';
import axios from 'axios';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMsg, setemailErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const dispatch = useDispatch(null);
  const onSubmitLogin = async () => {
    // const errorMsgEmail = emailValidation(email);
    // setemailErrorMsg(errorMsgEmail);
    // const errorMsgPassword = passwordValidation(password);
    // setPasswordErrorMsg(errorMsgPassword);
    // if (!errorMsgPassword && !errorMsgEmail) {
    //   const requestBody = {
    //     email: email,
    //     password: password,
    //   };
    // dispatch(
    //   loginRequest(
    //     requestBody,
    //     () => {},
    //     () => {},
    //   ),
    // );
    // setemailErrorMsg('');
    // setPasswordErrorMsg('');
    // }
  };
  useEffect(() => {
    const res = axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(resp => {
        return resp.data;
      });
    console.log(res);
  }, []);
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <WelcomeBox title={'Hey there,'} subtitle={'Welcome Back!'} />
        {/* Signup Inputs */}
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.inputContainer}>
            <Input
              onChangeText={val => {
                setEmail(val);
              }}
              renderErrorMessage={true}
              placeholder="Email"
              leftIcon={
                <Icon
                  type={'material'}
                  name={'email'}
                  size={22}
                  color={colors.g1}
                />
              }
              errorMessage={emailErrorMsg}
            />
            <Input
              onChangeText={val => {
                setPassword(val);
              }}
              errorMessage={passwordErrorMsg}
              renderErrorMessage={true}
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
              onSubmitLogin();
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
