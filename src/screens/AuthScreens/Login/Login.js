import React, {useState} from 'react';
import {Text, View, SafeAreaView, Image, StatusBar, Alert} from 'react-native';
import styles from './styles';
import {AuthFooter, Input, WelcomeBox} from '../../../components';
import {
  checkConnected,
  colors,
  loginFormFields,
  LoginVS,
} from '../../../shared/exporter';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {loginRequest} from '../../../redux/actions';

const Login = ({navigation}) => {
  const [loading, setloading] = useState(false);

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
      dispatch(
        loginRequest(
          requestBody,
          res => {
            setloading(false);
            if (res?.user != undefined) {
              setloading(false);
              navigation?.replace('App');
            } else {
              Alert.alert('Failed', res?.message || 'Logged In Failed');
            }
          },
          res => {
            Alert.alert('Failed', res?.message || 'Logged In Failed');
            setloading(false);
          },
        ),
      );
    } else {
      Alert.alert('Error', 'Check your internet connectivity!');
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
            handleBlur,
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
                  onBlur={handleBlur('email')}
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
                onApplePress={() => {
                  console.log('Apple Login');
                }}
                onGooglePress={() => {
                  console.log('Google Login');
                }}
              />
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default Login;
