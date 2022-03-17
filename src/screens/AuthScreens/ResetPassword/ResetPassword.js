import React, {useState} from 'react'; //States Declaration
import {View, SafeAreaView, Alert} from 'react-native';
import styles from './styles';
import {Input, WelcomeBox, Button, Loader} from '../../../components';
import {
  checkConnected,
  colors,
  resetFormFields,
  ResetPasswordVS,
  WP,
} from '../../../shared/exporter';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {resetPassRequest} from '../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

const ResetPassword = ({navigation}) => {
  //States Declaration
  const [isLoading, setisLoading] = useState(false);

  //Redux States
  const dispatch = useDispatch(null);
  const {forgotPassRes} = useSelector(state => state?.auth);

  //Reset Password Hanlder
  const ResetPassHanlder = async (values, resetForm) => {
    const checkInternet = await checkConnected();
    if (checkInternet) {
      setisLoading(true);
      const requestBody = {
        email: forgotPassRes?.email,
        password: values?.password,
        token: forgotPassRes?.otp,
      };
      console.log(requestBody);
      dispatch(
        resetPassRequest(
          requestBody,
          res => onSuccessResetPass(res, resetForm),
          onFailedResetPass,
        ),
      );
    } else {
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  //On Success Reset Password
  const onSuccessResetPass = (res, resetForm) => {
    setisLoading(false);
    Alert.alert('Success', res?.status, [
      {
        text: 'ok',
        onPress: () => {
          resetForm();
          navigation?.replace('Login');
        },
      },
    ]);
    console.log('Password Reset', res);
  };

  // On Failed Reset Password
  const onFailedResetPass = res => {
    setisLoading(false);
    console.log('Password not Reset', res);
  };
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
        <Formik
          initialValues={resetFormFields}
          onSubmit={(values, {resetForm}) => {
            ResetPassHanlder(values, resetForm);
          }}
          validationSchema={ResetPasswordVS}>
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
                  onChangeText={handleChange('password')}
                  renderErrorMessage={true}
                  placeholder="New Password"
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
                <Input
                  placeholder="Confirm New Password"
                  onChangeText={handleChange('confirmPassword')}
                  renderErrorMessage={true}
                  value={values.confirmPassword}
                  onBlur={() => setFieldTouched('confirmPassword')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.confirmPassword}
                  errorMessage={errors.confirmPassword}
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
              </View>

              {/* Footer Button */}
              <View style={styles.aiCenter}>
                <Button onPress={handleSubmit} title={'Reset'} />
              </View>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
      {isLoading && <Loader loading={isLoading} />}
    </SafeAreaView>
  );
};
export default ResetPassword;
