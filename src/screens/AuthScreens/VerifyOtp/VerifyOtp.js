import React, {useState, useRef} from 'react';
import {TouchableOpacity, View, SafeAreaView, Text, Alert} from 'react-native';
import styles from './styles';
import {WelcomeBox, Button, Loader} from '../../../components';
import {WP, colors, checkConnected} from '../../../shared/exporter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  CodeField,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CountDown from 'react-native-countdown-component';
import {useDispatch, useSelector} from 'react-redux';
import {verifyOTPRequest} from '../../../redux/actions';

const VerifyOtp = ({navigation}) => {
  //States Declaration
  const [isLoading, setisLoading] = useState(false);
  const [value, setValue] = useState('');
  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [resendCode, setResendCode] = useState(false);

  //Reference Declraration
  const ref = useRef();

  //Redux Declaration
  const {forgotPassRes} = useSelector(state => state?.auth);
  const dispatch = useDispatch(null);

  //verify OTP Handler Hanlder
  const confirmOtp = async code => {
    if (code != '') {
      const checkInternet = await checkConnected();
      if (checkInternet) {
        setisLoading(true);
        const requestBody = {
          email: forgotPassRes?.email,
          otp: code,
        };
        dispatch(
          verifyOTPRequest(
            requestBody,
            onVerificationSuccess,
            onVerificationFailed,
          ),
        );
      } else {
        Alert.alert('Error', 'Check your internet connectivity!');
      }
    } else {
      Alert.alert('Error', 'OTP required');
    }
  };

  //On Success Verify OTP
  const onVerificationSuccess = res => {
    setisLoading(false);
    if (res?.message == 'Otp is not matched') {
      Alert.alert('Error', res?.message);
    } else {
      navigation?.replace('ResetPassword');
      console.log('OTP Verified', res);
    }
  };

  // On Failed Verify OTP
  const onVerificationFailed = res => {
    setisLoading(false);
    Alert.alert('Error', res?.message);
    console.log('OTP Verified', res);
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <WelcomeBox
          subtitle={'Verified your OTP'}
          normalText={'Enter the OTP code send to the your email address'}
          paddingHorizontal={WP('15')}
        />
        {/* Otp Inputs */}
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.inputContainer}>
            <CodeField
              ref={ref}
              {...codeFieldProps}
              value={value}
              onChangeText={val => {
                setValue(val);
                if (val.length == 4) {
                  confirmOtp(val);
                }
              }}
              cellCount={4}
              onSubmitEditing={() => {
                confirmOtp(value);
              }}
              rootStyle={styles.otpInputBox}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <View
                  key={index}
                  style={[
                    styles.cell,
                    {borderColor: isFocused ? colors.p1 : colors.g8},
                  ]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  <Text style={styles.txtStyle}>{symbol}</Text>
                </View>
              )}
            />
          </View>

          {/* Resend Timer */}

          <View style={styles.aiFlexEnd}>
            <TouchableOpacity
              disabled={resendCode}
              onPress={() => {
                setResendCode(true);
              }}
              style={styles.textRow}>
              <Text style={[styles.resendText]}>
                Resend code {resendCode && 'in'}
              </Text>
              {resendCode && (
                <>
                  <CountDown
                    size={7}
                    until={60}
                    digitStyle={styles.digitStyle}
                    digitTxtStyle={styles.timerText}
                    timeToShow={['S']}
                    onFinish={() => {
                      setResendCode(false);
                    }}
                    timeLabels={{m: null, s: null}}
                  />
                  <Text style={[styles.timerText]}>sec</Text>
                </>
              )}
            </TouchableOpacity>
          </View>

          {/* Footer Button */}
          <View style={styles.aiCenter}>
            <Button
              disabled={isLoading}
              onPress={() => {
                confirmOtp(value);
              }}
              title={'Submit'}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
      {isLoading && <Loader loading={isLoading} />}
    </SafeAreaView>
  );
};

export default VerifyOtp;
