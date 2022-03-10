import React, {useState} from 'react';
import {Text, View, SafeAreaView, Image, StatusBar} from 'react-native';
import styles from './styles';
import {Input, WelcomeBox, Button} from '../../../components';
import {colors, WP} from '../../../shared/exporter';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ResetPassword = ({params, navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <WelcomeBox
          subtitle={'Reset Password'}
          normalText={
            'Enter the email associated with your account and we’ll send an OTP with instructions to reset password'
          }
          paddingHorizontal={WP('8')}
        />
        {/* Forgot Inputs */}
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.inputContainer}>
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
            <Input
              placeholder="Confirm Password"
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
          </View>

          {/* Footer Button */}
          <View style={styles.aiCenter}>
            <Button
              onPress={() => {
                navigation?.navigate('App');
              }}
              title={'Next'}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
export default ResetPassword;
