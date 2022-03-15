import React, {useState} from 'react';
import {Text, View, SafeAreaView, Alert} from 'react-native';
import styles from './styles';
import {AuthFooter, Checkbox, Input, WelcomeBox} from '../../../components';
import {
  checkConnected,
  colors,
  signupFormFields,
  SignUpVS,
} from '../../../shared/exporter';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {signUpRequest, socialLoginRequest} from '../../../redux/actions';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
// import {firebase} from '@react-native-firebase/auth';

const Signup = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [loading, setloading] = useState(false);

  //Redux States
  const dispatch = useDispatch(null);

  //Submit Sign Up Form
  const onSubmitSignup = async (values, resetForm) => {
    if (toggleCheckBox) {
      const checkInternet = await checkConnected();
      if (checkInternet) {
        setloading(true);
        const requestBdy = {
          email: values?.email,
          password: values?.password,
          password_confirmation: values?.password,
          first_name: values?.firstName,
          last_name: values?.lastName,
        };
        dispatch(
          signUpRequest(
            requestBdy,
            res => onSignUpSuccess(res, resetForm),
            onSignUpFailure,
          ),
        );
      } else {
        Alert.alert('Error', 'Check your internet connectivity!');
      }
    } else {
      Alert.alert(
        'Message!',
        'Please accept our Privacy Policy and Term of Use.',
      );
    }
  };
  //SignUp Failure
  const onSignUpFailure = res => {
    Alert.alert('Failed', res?.message || 'Registeration Failed');
    setloading(false);
  };
  //SignUp Success
  const onSignUpSuccess = (res, resetForm) => {
    setloading(false);
    if (res?.email != undefined) {
      Alert.alert('Success', 'User Resgisted Successfully', [
        {
          text: 'ok',
          onPress: () => {
            navigation?.navigate('Login');
            resetForm();
            setToggleCheckBox(false);
          },
        },
      ]);
    } else {
      Alert.alert('Failed', res?.message || 'Registeration Failed');
    }
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
        <WelcomeBox title={'Hey there,'} subtitle={'Create your account'} />
        {/* Signup Inputs */}
        <Formik
          initialValues={signupFormFields}
          onSubmit={(values, {resetForm}) => {
            onSubmitSignup(values, resetForm);
          }}
          validationSchema={SignUpVS}>
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
                  onChangeText={handleChange('firstName')}
                  errorMessage={errors.firstName}
                  renderErrorMessage={true}
                  placeholder="First Name"
                  value={values.firstName}
                  onBlur={() => setFieldTouched('firstName')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  leftIcon={
                    <Icon
                      type={'font-awesome'}
                      name={'user'}
                      size={22}
                      color={colors.g1}
                    />
                  }
                />
                <Input
                  onChangeText={handleChange('lastName')}
                  errorMessage={errors?.lastName}
                  renderErrorMessage={true}
                  placeholder="Last Name"
                  value={values?.lastName}
                  onBlur={() => setFieldTouched('lastName')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  leftIcon={
                    <Icon
                      type={'font-awesome'}
                      name={'user'}
                      size={22}
                      color={colors.g1}
                    />
                  }
                />
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
                <View style={styles.rememberTxtContainer}>
                  <Checkbox
                    toggleCheckBox={toggleCheckBox}
                    setToggleCheckBox={() => {
                      setToggleCheckBox(!toggleCheckBox);
                    }}
                  />
                  <Text style={styles.rememberTxtStyle}>
                    By continuing you accept our{' '}
                    <Text
                      onPress={() => {
                        navigation?.navigate('PrivacyPolicy');
                      }}
                      style={styles.textDecoration}>
                      Privacy Policy{' '}
                    </Text>
                    and{' '}
                    <Text
                      onPress={() => {
                        navigation?.navigate('Terms');
                      }}
                      style={styles.textDecoration}>
                      {' '}
                      Term of Use
                    </Text>
                  </Text>
                </View>
              </View>

              {/* Signup Footer Part */}
              <AuthFooter
                disabled={!isValid || loading}
                loading={loading}
                onPressText={() => {
                  handleReset();
                  setToggleCheckBox(false);
                  navigation?.navigate('Login');
                }}
                title={'Already have an account?'}
                subtitle={'Login'}
                buttonTxt={'Register'}
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

export default Signup;
