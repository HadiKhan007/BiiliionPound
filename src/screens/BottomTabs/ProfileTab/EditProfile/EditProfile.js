import {View, Image, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {
  AppHeader,
  ProfileImage,
  Input,
  Button,
  ImagePickerModal,
  Loader,
} from '../../../../components';
import {
  appIcons,
  BASE_URL,
  checkConnected,
  colors,
  image_options,
  responseValidator,
  updateFormFields,
  UpdateVS,
} from '../../../../shared/exporter';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Formik} from 'formik';
import {useIsFocused} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {setProfileImage, updateUserProfile} from '../../../../redux/actions';
import axios from 'axios';

const EditProfile = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState('');
  const {profile_image, userData} = useSelector(state => state?.profile);
  const {userInfo} = useSelector(state => state.auth);
  const dispatch = useDispatch(null);
  const isFocus = useIsFocused();
  const [loading, setLoading] = useState(false);
  console.log(userInfo?.token);
  const updateProfile = async values => {
    setLoading(true);
    const checkInternet = await checkConnected();
    const image_data = {
      uri: image?.uri,
      type: image?.type,
      name: image?.fileName,
    };

    if (checkInternet) {
      let fd = new FormData();
      if (image_data?.uri) {
        fd.append('profile_image', image_data);
      }
      fd.append('first_name', values.firstName || userData?.first_name);
      fd.append('last_name', values.lastName || userData?.last_name);
      fd.append('email', values.email || userData?.email);
      console.log(fd);
      fetch(`${BASE_URL}/users/${userInfo?.user?.id}`, {
        method: 'PUT',
        body: fd,
        headers: {
          'X-My-Custom-Header': 'value-v',
          Authorization: `Bearer ${userInfo?.token}`,
        },
      })
        .then(async res => {
          const response = await res.json();
          if (response) {
            dispatch(
              updateUserProfile(
                response,
                () => {
                  navigation?.goBack();
                  setLoading(false);
                },
                () => {
                  navigation?.goBack();
                  setLoading(false);
                },
              ),
            );
          }
        })
        .catch(error => {
          console.log(error);
          Alert.alert('Error', 'Something went wrong!');
          setLoading(false);
        });
    } else {
      setLoading(false);
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  //Handlers
  const showGallery = () => {
    setShow(false);
    setTimeout(() => {
      try {
        launchImageLibrary(image_options, response => {
          // Use launchImageLibrary to open image gallery
          console.log('Response', response);

          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            setImage(response?.assets[0]);
            dispatch(setProfileImage(response?.assets[0]?.uri));
            // You can also display the image using data:
            // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          }
        });
      } catch (error) {
        console.log(error);
      }
    }, 400);
  };

  //Open Camera
  const showCamera = () => {
    setShow(false);
    setTimeout(() => {
      try {
        launchCamera(image_options, response => {
          // Use launchImageLibrary to open image gallery
          console.log('Response = ', response);
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            if (response.assets) {
              setImage(response?.assets[0]);
              dispatch(setProfileImage(response?.assets[0]?.uri));
            } else {
              alert('Unable to open Camera');
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    }, 400);
  };

  return (
    <SafeAreaView style={styles.main}>
      {loading ? <Loader loading={loading} /> : null}
      <View style={styles.contentContainer}>
        <AppHeader
          icon={appIcons.backArrow}
          title={'Edit Profile'}
          titleColor={colors.white}
        />
        <View style={styles.itemContainer}>
          <ProfileImage
            profileUri={profile_image}
            onPressIcon={() => {
              setShow(true);
            }}
            icon={appIcons.camera}
          />
        </View>
        <Formik
          initialValues={{
            firstName: userData?.first_name,
            lastName: userData?.last_name,
            email: userData?.email,
          }}
          onSubmit={(values, {resetForm}) => {
            updateProfile(values);
          }}
          validationSchema={UpdateVS}>
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
            handleReset,
            setFieldValue,
          }) => {
            return (
              <KeyboardAwareScrollView
                style={styles.itemContainer2}
                showsVerticalScrollIndicator={false}>
                <View style={styles.inputContainer}>
                  <Input
                    onChangeText={handleChange('firstName')}
                    value={values.firstName}
                    errorMessage={errors.firstName}
                    renderErrorMessage={true}
                    placeholder="First Name"
                    onBlur={() => setFieldTouched('firstName')}
                    blurOnSubmit={false}
                    disableFullscreenUI={true}
                    touched={touched.firstName}
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
                    errorMessage={errors.lastName}
                    renderErrorMessage={true}
                    placeholder="Last Name"
                    value={values.lastName}
                    onBlur={() => setFieldTouched('lastName')}
                    blurOnSubmit={false}
                    disableFullscreenUI={true}
                    touched={touched.lastName}
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
                </View>
                <View style={styles.aiCenter}>
                  <Button
                    disabled={!isValid}
                    onPress={handleSubmit}
                    title={'Update'}
                  />
                </View>
                {show && (
                  <ImagePickerModal
                    show={show}
                    onPressHide={() => setShow(false)}
                    onPressGallery={() => {
                      showGallery();
                    }}
                    onPressCamera={() => {
                      showCamera();
                    }}
                  />
                )}
              </KeyboardAwareScrollView>
            );
          }}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
