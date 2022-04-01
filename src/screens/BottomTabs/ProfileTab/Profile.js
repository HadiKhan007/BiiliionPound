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
  spacing,
} from '../../../shared/exporter';
import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProfile, logoutRequset} from '../../../redux/actions';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useFocusEffect} from '@react-navigation/native';

const Profile = ({navigation}) => {
  //Redux States
  const dispatch = useDispatch(null);
  const {profile_image, userData} = useSelector(state => state?.profile);
  const {userInfo} = useSelector(state => state.auth);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('====================================');
    console.log(userInfo);
    console.log('====================================');
  }, []);

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
    dispatch(logoutRequset(null));
    GoogleSignin.signOut();
    navigation?.replace('Auth');
  };

  //get user data
  const getUserData = async () => {
    setLoading(true);
    console.log('====================================');
    console.log('in get user data');
    console.log('====================================');

    const checkInternet = await checkConnected();

    const cbSuccess = res => {
      console.log('====================================');
      console.log(res);
      console.log('====================================');
      setLoading(false);
    };

    const cbFailure = message => {
      console.log('====================================');
      console.log(message);
      console.log('====================================');
      setLoading(false);
    };

    if (checkInternet) {
      dispatch(getProfile(userInfo?.user?.id, cbSuccess, cbFailure));
    } else {
      setLoading(false);
      Alert.alert('Error', 'Check your internet connectivity!');
    }
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
        />
        <View style={styles.itemContainer}>
          <ProfileImage
            profileUri={profile_image}
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
                  <Title color={colors.b1} title={item?.title} />
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
