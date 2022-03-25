import {View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {
  AppHeader,
  ProfileImage,
  Input,
  Button,
  ImagePickerModal,
} from '../../../../components';
import {
  appIcons,
  colors,
  image_options,
  updateFormFields,
  UpdateVS,
} from '../../../../shared/exporter';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Formik} from 'formik';
import {useIsFocused} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {setProfileImage} from '../../../../redux/actions';

const EditProfile = ({navigation}) => {
  const [show, setShow] = useState(false);
  const {profile_image} = useSelector(state => state?.profile);
  const dispatch = useDispatch(null);
  const isFocus = useIsFocused();
  // useEffect(() => {
  //   if (isFocus) {
  //   }
  // }, [isFocus]);

  //Handlers
  const showGallery = () => {
    setShow(false);
    setTimeout(() => {
      try {
        launchImageLibrary(image_options, response => {
          // Use launchImageLibrary to open image gallery
          console.log('Response = ', response);

          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
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
          initialValues={updateFormFields}
          onSubmit={(values, {resetForm}) => {
            navigation?.goBack();
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
          }) => {
            return (
              <KeyboardAwareScrollView
                style={styles.itemContainer2}
                showsVerticalScrollIndicator={false}>
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
