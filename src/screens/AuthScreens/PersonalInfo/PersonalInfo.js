import {Alert, SafeAreaView, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import {AppHeader, Loader, SelectButton} from '../../../components';
import {appIcons, checkConnected} from '../../../shared/exporter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {
  updateInfoRequest,
  userInfoRequest,
  userModeRequest,
} from '../../../redux/actions';

const PersonalInfo = ({navigation}) => {
  const dispatch = useDispatch(null);
  const {userInfo, userWithMode} = useSelector(state => state?.auth);
  const [loading, setloading] = useState(false);
  const [heightFt, setHeightFt] = useState('');
  const [heightInc, setHeightInc] = useState('');
  const [weight, setWeight] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [gender, setGender] = useState([
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Other', value: 'other'},
  ]);

  const onPressTickButton = async () => {
    if (value != null) {
      if (heightFt === '' || heightInc === '' || weight === '') {
        return alert('Please filled empty fields first ');
      }
      const checkInternet = await checkConnected();
      if (checkInternet) {
        setloading(true);
        var formdata = new FormData();
        formdata.append('gender', value);
        formdata.append('height_feet', heightFt);
        formdata.append('height_inches', heightInc);
        formdata.append('weight', weight);
        dispatch(
          userInfoRequest(formdata, userInfo?.token, onSuccess, onFailure),
        );
      } else {
        Alert.alert('Error', 'Check your internet connectivity!');
      }
    } else {
      alert('Please select your gender first');
    }
  };

  const onSuccess = async res => {
    setloading(false);
    if (res?.personalinfo != undefined) {
      console.log('Personal Information:--', res);
      if (userWithMode?.user?.mode === 'exercise') {
        dispatch(
          userModeRequest('exercise', userInfo?.token, onSuccess, onFailure),
        );
        navigation.replace('App');
      } else {
        dispatch(
          userModeRequest('pedometer', userInfo?.token, onSuccess, onFailure),
        );
        navigation.replace('StepsMainFlow');
      }
    } else if (res?.message) {
      // console.log('alreay created--', res?.message);
      // updatePersonalInfo();
      // Alert.alert('Failed', res?.message || 'Select mode Failed');
    }
  };
  const onFailure = res => {
    console.log('failure response--', res);
    setloading(false);
    Alert.alert('Failed', res?.message || 'Select mode Failed');
  };

  // const updatePersonalInfo = async () => {
  //   if (value != null) {
  //     if (heightFt === '' || heightInc === '' || weight === '') {
  //       return alert('Please filled empty fields first ');
  //     }
  //     const checkInternet = await checkConnected();
  //     if (checkInternet) {
  //       setloading(true);
  //       var formdata = new FormData();
  //       formdata.append('gender', value);
  //       formdata.append('height_feet', heightFt);
  //       formdata.append('height_inches', heightInc);
  //       formdata.append('weight', weight);
  //       dispatch(
  //         updateInfoRequest(
  //           formdata,
  //           userInfo?.token,
  //           onInfoSuccess,
  //           onInfoFailure,
  //         ),
  //       );
  //     } else {
  //       Alert.alert('Error', 'Check your internet connectivity!');
  //     }
  //   } else {
  //     alert('Please select your gender first');
  //   }
  // };

  // const onInfoSuccess = async res => {
  //   console.log('Update user info===', res);
  //   setloading(false);
  //   if (res?.personalinfo != undefined) {
  //     console.log(res?.personalinfo);
  //     if (userWithMode?.user?.mode === 'exercise') {
  //       navigation.replace('App');
  //     } else {
  //       navigation.replace('StepsMainFlow');
  //     }
  //   }
  // };
  // const onInfoFailure = res => {
  //   console.log('failure response--', res);
  //   setloading(false);
  //   Alert.alert('Failed', res?.message || 'Select mode Failed');
  // };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader icon={appIcons.backArrow} title={'Personal info'} />
        <KeyboardAwareScrollView>
          <Text style={styles.titleStyle}>{`Gender`}</Text>
          <DropDownPicker
            dropDownContainerStyle={styles.dropDownItemsContianer}
            style={styles.dropDownStyle}
            placeholder="Select Gender"
            open={open}
            value={value}
            items={gender}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setGender}
          />

          <Text style={[styles.titleStyle, {marginTop: '3%'}]}>{`Height`}</Text>
          <View style={styles.inputsContainer}>
            <TextInput
              value={heightFt}
              onChangeText={txt => setHeightFt(txt)}
              placeholder="0 ft"
              style={styles.inputStyle}
              keyboardType="number-pad"
            />
            <TextInput
              value={heightInc}
              onChangeText={txt => setHeightInc(txt)}
              placeholder="0 inc"
              style={styles.inputStyle}
              keyboardType="number-pad"
            />
          </View>

          <Text style={[styles.titleStyle, {marginTop: '3%'}]}>{`Weight`}</Text>
          <TextInput
            value={weight}
            onChangeText={txt => setWeight(txt)}
            placeholder="0 kg"
            style={[styles.inputStyle, {width: '100%'}]}
            keyboardType="number-pad"
          />
        </KeyboardAwareScrollView>
        <View style={styles.aiEnd}>
          <SelectButton onPress={onPressTickButton} />
        </View>
      </View>
      {loading && <Loader loading={loading} />}
    </SafeAreaView>
  );
};

export default PersonalInfo;
