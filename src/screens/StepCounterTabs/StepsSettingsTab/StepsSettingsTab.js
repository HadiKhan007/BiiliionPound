import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {colors, family} from '../../../shared/exporter';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {logoutRequset} from '../../../redux/actions';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const StepsSettingsTab = ({navigation}) => {
  const dispatch = useDispatch();

  const onLogout = async () => {
    await AsyncStorage.setItem('isRemember', 'false');
    dispatch(logoutRequset(null));
    GoogleSignin.signOut();
    navigation?.replace('Auth');
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>{`Settings`}</Text>

        <View style={styles.calculationContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {/* <Text>{`Achievements`}</Text>
            <Text style={styles.history}>{`History`}</Text> */}
          </View>
          <View style={styles.calculationInnerContainer}>
            <View style={styles.iconAndTextContainer}>
              <Text style={styles.count}>{`234`}</Text>
              <Text style={styles.category}>{`Kcal`}</Text>
            </View>
            <View style={styles.iconAndTextContainer}>
              <Text style={styles.count}>{`5,097`}</Text>
              <Text style={styles.category}>{`Steps`}</Text>
            </View>
            <View style={styles.iconAndTextContainer}>
              <Text style={styles.count}>{`2 miles`}</Text>
              <Text style={styles.category}>{`Distance`}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={onLogout}
          activeOpacity={0.8}
          style={styles.logoutBtn}>
          <Text style={{fontFamily: family.Poppins_Medium}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StepsSettingsTab;
