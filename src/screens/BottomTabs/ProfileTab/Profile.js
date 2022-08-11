import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  Alert,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './styles';
import {
  AppHeader,
  Loader,
  PrimaryHeading,
  ProfileImage,
  Title,
} from '../../../components';
import {
  appIcons,
  checkConnected,
  colors,
  profile_uri,
  scrWidth,
  spacing,
} from '../../../shared/exporter';
import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteAccountRequest,
  getProfile,
  logoutRequset,
} from '../../../redux/actions';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  //Redux States
  const dispatch = useDispatch(null);
  const {profile_image, userData} = useSelector(state => state?.profile);
  const {userInfo} = useSelector(state => state.auth);
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      getUserData();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [navigation]),
  );
  //On Logout Hanlder
  const onLogout = async () => {
    await AsyncStorage.setItem('isRemember', 'false');
    dispatch(logoutRequset(null));
    GoogleSignin.signOut();
    navigation?.replace('Auth');
  };

  //get user data
  const getUserData = async () => {
    setLoading(true);

    const checkInternet = await checkConnected();

    const cbSuccess = res => {
      setLoading(false);
    };

    const cbFailure = message => {
      setLoading(false);
    };

    if (checkInternet) {
      dispatch(getProfile(userInfo?.user?.id, cbSuccess, cbFailure));
    } else {
      setLoading(false);
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  const deleteUser = () => {
    Alert.alert(
      'Delete Your Account',
      'Are you sure you want to delete your account on Billion Pound ?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => deleteAccount(),
        },
      ],
    );
  };

  const deleteAccount = () => {
    setLoading(true);
    console.log('in delete account');

    const cbSuccess = res => {
      console.log('res of delete', res);
      setLoading(false);
      navigation?.replace('Auth');
    };

    const cbFailure = mes => {
      console.log('mes in delete', res);
      setLoading(false);
    };

    dispatch(deleteAccountRequest(cbSuccess, cbFailure));
  };

  //Profile Card List
  const data = [
    {
      title: 'Privacy Policy',
      icon: appIcons.security,
      style: styles.policyImageStyle,
      onPress: () => {
        navigation?.navigate('PrivacyPolicy');
      },
    },
    {
      title: 'Terms & Conditions',
      icon: appIcons.policy,
      style: styles.TermsImageStyle,
      onPress: () => {
        navigation?.navigate('Terms');
      },
    },
    {
      title: 'FAQs',
      icon: appIcons.faqs,
      style: styles.faqsImageStyle,
      onPress: () => {
        navigation?.navigate('Faqs');
      },
    },
    {
      title: 'Logout',
      icon: appIcons.logout,
      style: styles.logoutImageStyle,
      onPress: () => {
        onLogout();
      },
    },
    {
      title: 'Delete Account',
      icon: appIcons.deleteAccount,
      style: styles.deleteImageStyle,
      onPress: () => {
        deleteUser();
      },
    },
  ];
  return (
    <SafeAreaView style={styles.main}>
      {loading ? <Loader loading={loading} /> : null}
      <View style={styles.contentContainer}>
        <AppHeader
          title={'Profile'}
          smSubtitle={'Edit Profile'}
          onPressBtn={() => {
            navigation?.navigate('EditProfile');
          }}
          centerContainerWidth={scrWidth / 2}
          rightContainerWidth={scrWidth / 5.6}
        />
        <View style={styles.itemContainer}>
          <ProfileImage
            profileUri={profile_image || profile_uri}
            title={userData?.full_name}
          />
        </View>
        <View style={spacing.py3}>
          <PrimaryHeading title={'Account'} />
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={item?.onPress}
                style={styles.imageConatiner}>
                <Image style={item?.style} source={item?.icon} />
                <View style={[spacing.my2, spacing.ml5]}>
                  <Title
                    color={
                      item.title === 'Delete Account' ? colors.red : colors.b1
                    }
                    title={item?.title}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
