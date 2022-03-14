import React, {useState} from 'react';
import {Text, View, SafeAreaView, Image, StatusBar, Alert} from 'react-native';
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
import {signUpRequest} from '../../../redux/actions';

const Signup = ({params, navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [loading, setloading] = useState(false);

  //Redux States
  const dispatch = useDispatch(null);

  //Submit Sign Up Form
  const onSubmitSignup = async values => {
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
            res => {
              setloading(false);
              if (res?.email != undefined) {
                setloading(false);
                Alert.alert('Success', 'User Resgisted Successfully', [
                  {
                    text: 'ok',
                    onPress: () => {
                      navigation?.navigate('Login');
                    },
                  },
                ]);
              } else {
                Alert.alert('Failed', res?.message || 'Registeration Failed');
              }
            },
            res => {
              Alert.alert('Failed', res?.message || 'Registeration Failed');
              setloading(false);
            },
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
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <WelcomeBox title={'Hey there,'} subtitle={'Create your account'} />
        {/* Signup Inputs */}
        <Formik
          initialValues={signupFormFields}
          onSubmit={values => {
            onSubmitSignup(values);
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
                  navigation?.navigate('Login');
                }}
                title={'Already have an account?'}
                subtitle={'Login'}
                buttonTxt={'Register'}
                onPressBtn={handleSubmit}
                onApplePress={() => {
                  console.log('Apple Signup');
                }}
                onGooglePress={() => {
                  console.log('Google Signup');
                }}
              />
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
