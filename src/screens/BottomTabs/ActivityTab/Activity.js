import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import React from 'react';
import styles from './styles';
import {AppHeader} from '../../../components';
import {appIcons} from '../../../shared/exporter';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useDispatch} from 'react-redux';
import {logoutRequset} from '../../../redux/actions';
const Activity = ({navigation}) => {
  const dispatch = useDispatch(null);
  const onLogout = () => {
    dispatch(logoutRequset(null));
    GoogleSignin.signOut();
    navigation?.navigate('Auth');
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader title={'Activity'} icon={appIcons.backArrow} />
        <View>
          <Button onPress={onLogout} title={'Logout'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Activity;
