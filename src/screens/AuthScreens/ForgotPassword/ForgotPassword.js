import React, {useState} from 'react';
import {Text, View, SafeAreaView, Image, StatusBar, Alert} from 'react-native';
import styles from './styles';
import {Input, WelcomeBox, Button, Loader} from '../../../components';
import {
  checkConnected,
  colors,
  forgotFormFields,
  ForgotPasswordVS,
} from '../../../shared/exporter';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import {forgotPassRequest} from '../../../redux/actions';

const ForgotPassword = ({navigation}) => {
  //States Declaration
  const [isLoading, setisLoading] = useState(false);

  //Redux States
  const dispatch = useDispatch(null);

  //Forgot Password Hanlder
  const forgotPassHanlder = async (values, resetForm) => {
    const checkInternet = await checkConnected();
    if (checkInternet) {
      setisLoading(true);
      const requestBody = {
        email: values?.email,
      };
      dispatch(
        forgotPassRequest(
          requestBody,
          res => onSuccessForgotPass(res, resetForm),
          onFailedForgotPass,
        ),
      );
    } else {
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  //On Success Forgot Password
  const onSuccessForgotPass = (res, resetForm) => {
    setisLoading(false);
    resetForm();
    navigation?.navigate('VerifyOtp');
    console.log('Email Send', res);
  };

  // On Failed Forgot Password
  const onFailedForgotPass = res => {
    setisLoading(false);
    console.log('Email Not Send', res);
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <WelcomeBox
          subtitle={'Forgot Password'}
          normalText={'Type your password and confirmtion'}
        />
        {/* Forgot Inputs */}
        <Formik
          initialValues={forgotFormFields}
          onSubmit={(values, {resetForm}) => {
            forgotPassHanlder(values, resetForm);
          }}
          validationSchema={ForgotPasswordVS}>
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
              </View>

              {/* Footer Button */}
              <View style={styles.aiCenter}>
                <Button
                  disabled={isLoading || !isValid}
                  onPress={handleSubmit}
                  title={'Send OTP'}
                />
              </View>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
      {isLoading && <Loader loading={isLoading} />}
    </SafeAreaView>
  );
};

export default ForgotPassword;
