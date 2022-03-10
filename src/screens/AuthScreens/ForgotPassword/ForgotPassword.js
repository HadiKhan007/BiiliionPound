import React, {useState} from 'react';
import {Text, View, SafeAreaView, Image, StatusBar} from 'react-native';
import styles from './styles';
import {Input, WelcomeBox, Button} from '../../../components';
import {colors} from '../../../shared/exporter';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ForgotPassword = ({params, navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <WelcomeBox
          subtitle={'Forgot Password'}
          normalText={'Type your password and confirmtion'}
        />
        {/* Forgot Inputs */}
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
          </View>

          {/* Footer Button */}
          <View style={styles.aiCenter}>
            <Button
              onPress={() => {
                navigation?.navigate('VerifyOtp');
              }}
              title={'Send OTP'}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
