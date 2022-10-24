import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import styles from './styles';
import {
  appIcons,
  checkConnected,
  colors,
  family,
  size,
} from '../../../shared/exporter';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {logoutRequset} from '../../../redux/actions';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import SettingsInput from '../../../components/Input/SettingsInputs';
import {useFocusEffect} from '@react-navigation/native';
import {Button, Loader} from '../../../components';
import {
  getUserInfoRequest,
  updateInfoRequest,
} from '../../../redux/actions/auth-actions/auth-action';
import {Dropdown} from 'react-native-element-dropdown';
import LinearGradient from 'react-native-linear-gradient';

const genders = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
  {label: 'Others', value: 'others'},
];

const sensitivity = [
  {label: 'Fast', value: 'fast'},
  {label: 'Medium', value: 'medium'},
  {label: 'Low', value: 'low'},
];

const StepsSettingsTab = ({navigation}) => {
  const dispatch = useDispatch();
  const {userInfo} = useSelector(state => state?.auth);
  const [isLoading, setisLoading] = useState(false);
  const [stepGoal, setStepGoal] = useState(null);
  const [weight, setWeight] = useState(null);
  const [heightFt, setHeightFt] = useState(null);
  const [heightInc, setHeightInc] = useState(null);

  const [gender, setGender] = useState(null);
  const [pedoSensitivity, setPedoSensitivity] = useState(null);

  useFocusEffect(
    useCallback(() => {
      getPersonalInfomation();
      return () => {};
    }, [navigation]),
  );

  const getPersonalInfomation = async () => {
    const checkInternet = await checkConnected();
    if (checkInternet) {
      setisLoading(true);
      const getSuccess = res => {
        if (res?.personalinfo) {
          setStepGoal(res?.personalinfo?.step_goals?.toString());
          setWeight(res?.personalinfo?.weight?.toString());
          setHeightFt(res?.personalinfo?.height_feet?.toString());
          setHeightInc(res?.personalinfo?.height_inches?.toString());
          setGender(res?.personalinfo?.gender?.toString());
          setPedoSensitivity(res?.personalinfo?.sensitivity);
        }
        setisLoading(false);
      };
      //Get Failure
      const getFailure = res => {
        console.log(res);
        setisLoading(false);
        if (res) {
          Alert.alert('Error', res);
        }
      };
      dispatch(getUserInfoRequest(userInfo?.token, getSuccess, getFailure));
    } else {
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  const updatePersonalInfo = async () => {
    const checkInternet = await checkConnected();
    if (checkInternet) {
      setisLoading(true);

      const requestBody = {
        gender: gender,
        height_feet: heightFt,
        height_inches: heightInc,
        weight: weight,
        step_goals: stepGoal,
        sensitivity: pedoSensitivity,
      };

      dispatch(
        updateInfoRequest(
          requestBody,
          userInfo?.token,
          onInfoSuccess,
          onInfoFailure,
        ),
      );
    } else {
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  const onInfoSuccess = async res => {
    console.log('Update user info===', res);
    setisLoading(false);
    Alert.alert('Success', 'User personal information successfully updated ');
  };

  const onInfoFailure = res => {
    console.log('failure response--', res);
    setisLoading(false);
    Alert.alert('Failed', res?.message || 'Select mode Failed');
  };

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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.txtContainer}>
            <Text style={[styles.achievements]}>{`Achievements`}</Text>
            <Text style={styles.history}>{`History`}</Text>
          </View>
          <View style={styles.calculationContainer}>
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

          {/* personal info inputs */}
          <SettingsInput
            value={stepGoal}
            onChangeText={text => setStepGoal(text)}
            innerText="Steps"
            inputTitle="Step Goal"
            inputIcon={appIcons?.stepGoal}
          />
          <SettingsInput
            value={weight}
            onChangeText={text => setWeight(text)}
            innerText="Lbs"
            inputTitle="Weight"
            inputIcon={appIcons?.weightIcon}
          />
          <SettingsInput
            value={heightFt}
            onChangeText={text => setHeightFt(text)}
            innerText="Ft"
            inputTitle="Height"
            inputIcon={appIcons?.heightIcon}
          />
          <SettingsInput
            value={heightInc}
            onChangeText={text => setHeightInc(text)}
            innerText="Inc"
            inputTitle="Height"
            inputIcon={appIcons?.heightIcon}
          />

          {/* Dropdown Inputs */}
          <View style={styles.dropDownContainer}>
            <View style={styles.innerContainer}>
              <Image source={appIcons?.genderIcon} style={styles.icon} />
              <Text style={styles.title}>{'Gender'}</Text>
            </View>
            <View style={styles.iconAndText}>
              <Dropdown
                style={[styles.dropdown]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={genders}
                labelField="label"
                valueField="value"
                placeholder={'Choose'}
                dropdownPosition="top"
                value={gender}
                onChange={item => {
                  setGender(item.value);
                }}
                renderRightIcon={() => (
                  <View
                    style={[styles.triangle, {transform: [{rotate: '180deg'}]}]}
                  />
                )}
              />
            </View>
          </View>

          <View style={styles.dropDownContainer}>
            <View style={styles.innerContainer}>
              <Image source={appIcons?.pedometerIcon} style={styles.icon} />
              <Text style={styles.title}>{'Pedometer Sensitivity'}</Text>
            </View>
            <View style={[styles.iconAndText]}>
              <Dropdown
                style={[styles.dropdown]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={[styles.selectedTextStyle]}
                data={sensitivity}
                maxHeight={200}
                labelField="label"
                valueField="value"
                placeholder={'Choose'}
                value={pedoSensitivity}
                onChange={item => {
                  setPedoSensitivity(item.value);
                }}
                renderRightIcon={() => (
                  <View
                    style={[styles.triangle, {transform: [{rotate: '180deg'}]}]}
                  />
                )}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              width={'100%'}
              title="Update"
              onPress={updatePersonalInfo}
            />
          </View>
          <LinearGradient
            colors={colors.e_gradient}
            style={styles.btnContainer}>
            <Text
              style={
                styles.secondTitle
              }>{`Do you want to switch the mode?`}</Text>
            <Text style={styles.description}>
              {`You're currently in step mode, would you like to switch to weight mode? Your steps will continue to be counted while in weight mode Include buttons for "Stay in step mode”`}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('ModeStack')}
              activeOpacity={0.8}
              style={styles.modeBtn}>
              <Text
                style={[
                  styles.secondTitle,
                  {fontFamily: family.OpenSans_Medium, fontSize: size.large},
                ]}>{`switch mode`}</Text>
            </TouchableOpacity>
          </LinearGradient>
          <TouchableOpacity
            onPress={onLogout}
            activeOpacity={0.8}
            style={styles.logoutBtn}>
            <Text style={{fontFamily: family.Poppins_Medium}}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {isLoading && <Loader loading={isLoading} />}
    </SafeAreaView>
  );
};

export default StepsSettingsTab;
