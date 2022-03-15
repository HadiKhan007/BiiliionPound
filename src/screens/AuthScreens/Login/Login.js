import React, {useEffect, useState} from 'react';
import {Text, View, SafeAreaView, Image, StatusBar, Alert} from 'react-native';
import styles from './styles';
import {AuthFooter, Input, WelcomeBox} from '../../../components';
import {
  checkConnected,
  colors,
  loginFormFields,
  LoginVS,
  web_client_id,
} from '../../../shared/exporter';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {loginRequest, socialLoginRequest} from '../../../redux/actions';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
// import {firebase} from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [loading, setloading] = useState(false);

  //Redux States
  const dispatch = useDispatch(null);

  //Initialize Google Signin
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: web_client_id,
    });
  }, []);

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
  const onLoginSuccess = res => {
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

  //Google Login
  const onGoogleButtonPress = async () => {
    const checkInternet = await checkConnected();
    if (checkInternet) {
      setloading(true);
      try {
        await GoogleSignin.hasPlayServices();
        const {idToken} = await GoogleSignin.signIn();
        // ***********use for authentication*************
        // const googleCredential =
        //   firebase?.auth.GoogleAuthProvider.credential(idToken);
        // const res = await firebase.auth().signInWithCredential(googleCredential);
        // ***********use for authentication*************
        const requestBody = {
          token: idToken,
        };
        dispatch(
          socialLoginRequest(
            requestBody,
            onSocialLoginSuccess,
            onSocialLoginFailed,
          ),
        );
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          setloading(false);
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          setloading(false);
        } else {
          setloading(false);
        }
      }
    } else {
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };
  //On Social Login Success
  const onSocialLoginSuccess = res => {
    navigation?.replace('App');
    setloading(false);
    console.log('Social Login Success', res);
  };
  //On Social Login Failed
  const onSocialLoginFailed = res => {
    setloading(false);
    console.log('Social Login Failed');
  };

  //On Apple SignIn
  const onAppleButtonPress = async () => {
    try {
      setloading(true);
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });
      const {identityToken, nonce} = appleAuthRequestResponse;
      if (identityToken) {
        setloading(false);
        console.log(identityToken);
        navigation?.replace('App');

        // ***********use for authentication*************
        //Can be used in future
        // const appleCredential = firebase.auth.AppleAuthProvider.credential(
        //   identityToken,
        //   nonce,
        // );
        // const userCredential = await firebase
        //   .auth()
        //   .signInWithCredential(appleCredential);
        // ***********use for authentication*************

        console.warn(
          `Firebase authenticated via Apple, UID: ${userCredential.user.uid}`,
        );
      } else {
        // handle this - retry?
        Alert.alert('Error', 'Try Again few seconds later.');
        setloading(false);
      }
    } catch (error) {
      setloading(false);
    }
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
                disabled={loading || !isValid}
                loading={loading}
                onPressText={() => {
                  navigation?.navigate('SignUp');
                }}
                title={`Don't have an account?`}
                subtitle={'Register'}
                buttonTxt={'Login'}
                onPressBtn={handleSubmit}
                onApplePress={onAppleButtonPress}
                onGooglePress={onGoogleButtonPress}
              />
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default Login;
