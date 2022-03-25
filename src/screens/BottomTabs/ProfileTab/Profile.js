import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  AppHeader,
  PrimaryHeading,
  ProfileImage,
  Title,
} from '../../../components';
import {appIcons, colors, spacing} from '../../../shared/exporter';
import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logoutRequset} from '../../../redux/actions';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Profile = ({navigation}) => {
  //Redux States
  const dispatch = useDispatch(null);
  const {profile_image} = useSelector(state => state?.profile);

  //On Logout Hanlder
  const onLogout = async () => {
    dispatch(logoutRequset(null));
    GoogleSignin.signOut();
    navigation?.replace('Auth');
  };
  //Profile Card List
  const data = [
    {
      title: 'Priavcy Policy',
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
      <View style={styles.contentContainer}>
        <AppHeader
          title={'Profile'}
          smSubtitle={'Edit Profile'}
          onPressBtn={() => {
            navigation?.navigate('EditProfile');
          }}
        />
        <View style={styles.itemContainer}>
          <ProfileImage profileUri={profile_image} title={'John Doe'} />
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
