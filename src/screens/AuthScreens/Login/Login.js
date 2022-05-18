import React, {useEffect, useState} from 'react';
import {Text, View, SafeAreaView, Image, StatusBar, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import {AuthFooter, Input, WelcomeBox} from '../../../components';
import {
  checkConnected,
  colors,
  loginFormFields,
  LoginVS,
  onAppleLogin,
  onGoogleLogin,
} from '../../../shared/exporter';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {loginRequest} from '../../../redux/actions';

// import {firebase} from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [loading, setloading] = useState(false);
  const [isRemember, setIsRemember] = useState(false);

  //Redux States
  const dispatch = useDispatch(null);

  //On Submit Login Form
  const onSubmitLogin = async values => {
    const checkInternet = await checkConnected();
    if (checkInternet) {
      setloading(true);
      const requestBody = {
        email: values?.email,
        password: values?.password,
      };
      dispatch(loginRequest(requestBody, onLoginSuccess, onLoginFailure));
    } else {
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };
  //onLogin Success
  const onLoginSuccess = async res => {
    await AsyncStorage.setItem('isRemember', isRemember.toString());
    setloading(false);
    if (res?.user != undefined) {
      navigation?.replace('App');
    } else {
      Alert.alert('Failed', res?.message || 'Logged In Failed');
    }
  };
  //On Login Failure
  const onLoginFailure = res => {
    Alert.alert('Failed', res?.message || 'Logged In Failed');
    setloading(false);
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <WelcomeBox title={'Hey there,'} subtitle={'Welcome Back!'} />
        {/* Login Inputs */}
        <Formik
          initialValues={loginFormFields}
          onSubmit={values => {
            onSubmitLogin(values);
          }}
          validationSchema={LoginVS}>
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
            handleReset,
          }) => (
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.inputContainer}>
                <Input
                  onChangeText={handleChange('email')}
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
                  value={values.email}
                  onBlur={() => setFieldTouched('email')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.email}
                  errorMessage={errors.email}
                />
                <Input
                  onChangeText={handleChange('password')}
                  renderErrorMessage={true}
                  placeholder="Password"
                  value={values.password}
                  onBlur={() => setFieldTouched('password')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.password}
                  errorMessage={errors.password}
                  onSubmitEditing={handleSubmit}
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
                <View style={styles.rowContainer}>
                  <View style={styles.innerRowContainer}>
                    <Icon
                      type={'MaterialIcons'}
                      name={
                        isRemember ? 'check-box' : 'check-box-outline-blank'
                      }
                      size={20}
                      color={isRemember ? colors.p1 : colors.g1}
                      style={{marginTop: 5}}
                      onPress={() => setIsRemember(!isRemember)}
                    />
                    <Text
                      onPress={() => {
                        handleReset();
                        navigation?.navigate('ForgotPassword');
                      }}
                      style={styles.rememberTxtStyle}>
                      Remember me
                    </Text>
                  </View>
                  <Text
                    onPress={() => {
                      handleReset();
                      navigation?.navigate('ForgotPassword');
                    }}
                    style={styles.forgotTxtStyle}>
                    Forgot your password?{' '}
                  </Text>
                </View>
              </View>

              {/* Login Footer Part */}
              <AuthFooter
                disabled={loading || !isValid}
                loading={loading}
                onPressText={() => {
                  handleReset();
                  navigation?.navigate('SignUp');
                }}
                title={`Don't have an account?`}
                subtitle={'Register'}
                buttonTxt={'Login'}
                onPressBtn={handleSubmit}
                onApplePress={() => {
                  onAppleLogin(navigation, dispatch, setloading, isRemember);
                }}
                onGooglePress={() =>
                  onGoogleLogin(navigation, dispatch, setloading, isRemember)
                }
              />
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default Login;
