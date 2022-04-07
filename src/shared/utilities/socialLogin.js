import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';
import {socialLoginRequest} from '../../redux/actions';
import {checkConnected} from './helper';
import {appleAuth} from '@invertase/react-native-apple-authentication';

//Google Login
export const onGoogleLogin = async (navigation, dispatch, setloading) => {
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
          'google',
          requestBody,
          res => onSocialLoginSuccess(res, navigation, setloading),
          res => onSocialLoginFailed(res, setloading),
        ),
      );
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Error', 'Operation canceled by user');
        setloading(false);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Error', 'No User Available');
        setloading(false);
      } else {
        setloading(false);
      }
    }
  } else {
    Alert.alert('Error', 'Check your internet connectivity!');
  }
};

//On Apple SignIn
export const onAppleLogin = async (navigation, dispatch, setloading) => {
  const checkInternet = await checkConnected();
  if (checkInternet) {
    try {
      setloading(true);
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });
      const {identityToken, nonce} = appleAuthRequestResponse;
      if (identityToken) {
        const requestBody = {
          token: identityToken,
          first_name: appleAuthRequestResponse?.fullName?.givenName,
          last_name: appleAuthRequestResponse?.fullName?.familyName,
        };
        dispatch(
          socialLoginRequest(
            'apple',
            requestBody,
            res => onSocialLoginSuccess(res, navigation, setloading),
            res => onSocialLoginFailed(res, setloading),
          ),
        );
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
      } else {
        // handle this - retry?
        Alert.alert('Error', 'Try Again few seconds later.');
        setloading(false);
      }
    } catch (error) {
      setloading(false);
    }
  } else {
    Alert.alert('Error', 'Check your internet connectivity!');
  }
};
//On Social Login Success
const onSocialLoginSuccess = (res, navigation, setloading) => {
  if (res) {
    navigation?.replace('App');
    setloading(false);
    // console.log('Social Login Success', res);
  } else {
    Alert.alert('Error', res?.message);
  }
};
//On Social Login Failed
const onSocialLoginFailed = (res, setloading) => {
  setloading(false);
  console.log('Social Login Failed');
};
