import React, {useState} from 'react';
import {Text, View, SafeAreaView, Image, StatusBar} from 'react-native';
import styles from './styles';
import {AuthFooter, Checkbox, Input, WelcomeBox} from '../../../components';
import {
  colors,
  emailValidation,
  firstNameValidation,
  passwordValidation,
} from '../../../shared/exporter';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Signup = ({params, navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firsrNameErrorMsg, setfirstNameErrorMsg] = useState('');
  const [lastNameErrorMsg, setlastNameErrorMsg] = useState('');
  const [emailErrorMsg, setemailErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');

  const onSubmitSignup = () => {
    const errorMsgEmail = emailValidation(email);
    setemailErrorMsg(errorMsgEmail);
    const errorMsgPassword = passwordValidation(password);
    setPasswordErrorMsg(errorMsgPassword);
    const errorMsgFirstName = firstNameValidation(firstName);
    setfirstNameErrorMsg(errorMsgFirstName);
    const errorMsglastName = firstNameValidation(lastName);
    setlastNameErrorMsg(errorMsglastName);
    if (
      !errorMsgPassword &&
      !errorMsgEmail &&
      !errorMsgFirstName &&
      !errorMsglastName
    ) {
      setemailErrorMsg('');
      setPasswordErrorMsg('');
      setfirstNameErrorMsg('');
      setlastNameErrorMsg('');
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <WelcomeBox title={'Hey there,'} subtitle={'Create your account'} />
        {/* Signup Inputs */}
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.inputContainer}>
            <Input
              onChangeText={val => {
                setFirstName(val);
              }}
              errorMessage={firsrNameErrorMsg}
              renderErrorMessage={true}
              placeholder="First Name"
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
              onChangeText={val => {
                setLastName(val);
              }}
              errorMessage={lastNameErrorMsg}
              renderErrorMessage={true}
              placeholder="Last Name"
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
              placeholder="Email"
              leftIcon={
                <Icon
                  type={'material'}
                  name={'email'}
                  size={22}
                  color={colors.g1}
                />
              }
              onChangeText={val => {
                setEmail(val);
              }}
              renderErrorMessage={true}
              errorMessage={emailErrorMsg}
            />
            <Input
              placeholder="Password"
              secureTextEntry
              onChangeText={val => {
                setPassword(val);
              }}
              errorMessage={passwordErrorMsg}
              renderErrorMessage={true}
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
            onPressText={() => {
              navigation?.navigate('Login');
            }}
            title={'Already have an account?'}
            subtitle={'Login'}
            buttonTxt={'Register'}
            onPressBtn={() => {
              onSubmitSignup();
            }}
            onApplePress={() => {
              console.log('Apple Signup');
            }}
            onGooglePress={() => {
              console.log('Google Signup');
            }}
          />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
