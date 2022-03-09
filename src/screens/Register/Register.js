import React, {useState} from 'react';
import {Text, View, SafeAreaView, Image, StatusBar} from 'react-native';
import {family} from '../../shared/exporter';
import styles from './styles';
import {AuthFooter, Button, Checkbox, Input} from '../../components';
import {colors} from '../../shared/exporter';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Signup = ({params, navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={'dark-content'}
      />
      <View style={styles.contentContainer}>
        <WelcomeBox title={'Hey there,'} subtitle={'Create your account'} />
        {/* Signup Inputs */}
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.inputContainer}>
            <Input
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
            <View style={styles.rememberTxtContainer}>
              <Checkbox
                toggleCheckBox={toggleCheckBox}
                setToggleCheckBox={() => {
                  setToggleCheckBox(!toggleCheckBox);
                }}
              />
              <Text onPress={() => {}} style={styles.rememberTxtStyle}>
                By continuing you accept our{' '}
                <Text style={styles.textDecoration}>Privacy Policy </Text>
                and{' '}
                <Text onPress={() => {}} style={styles.textDecoration}>
                  {' '}
                  Term of Use
                </Text>
              </Text>
            </View>
          </View>

          {/* Signup Footer Part */}
          <FooterBox
            onPress={() => {
              navigation?.navigate('Login');
            }}
            title={'Already have an account?'}
            subtitle={'Login'}
            buttonTxt={'Register'}
            onPressBtn={() => {
              console.log('coming');
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

export default Signup;
