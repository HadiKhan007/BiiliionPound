import {Alert, SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {AppHeader, Loader, SelectButton} from '../../../components';
import {appIcons, checkConnected} from '../../../shared/exporter';
import DropDownPicker from 'react-native-dropdown-picker';
import {useDispatch, useSelector} from 'react-redux';
import {userModeRequest} from '../../../redux/actions';
import {Dropdown} from 'react-native-element-dropdown';

const SelectMode = ({navigation}) => {
  const dispatch = useDispatch(null);
  const {userInfo} = useSelector(state => state?.auth);
  const [loading, setloading] = useState(false);
  const [value, setValue] = useState(null);
  const [modes, setModes] = useState([
    {label: 'Billion Pounds  (weight mode)', value: 'weight-mode'},
    {label: ' Billion Steps (step mode)', value: 'step-mode'},
  ]);

  const onPressTickButton = async () => {
    if (value != null) {
      const checkInternet = await checkConnected();
      if (checkInternet) {
        setloading(true);
        dispatch(userModeRequest(value, userInfo?.token, onSuccess, onFailure));
      } else {
        Alert.alert('Error', 'Check your internet connectivity!');
      }
    } else {
      alert('Please select mode first to proceed');
    }
  };

  const onSuccess = async res => {
    setloading(false);
    if (res?.user != undefined) {
      console.log('Selected Mode:--', res);
      if (res?.user?.mode === 'exercise') {
        // navigation.replace('App');
        navigation.reset({
          index: 0,
          routes: [{name: 'App'}],
        });
      } else if (
        res?.personal_information === 'not created' &&
        res?.user?.mode === 'pedometer'
      ) {
        navigation.replace('PersonalInfo');
      } else {
        // navigation.replace('StepsMainFlow');
        navigation.reset({
          index: 0,
          routes: [{name: 'StepsMainFlow'}],
        });
      }
    } else {
      Alert.alert('Failed', res?.message || 'Select mode Failed');
    }
  };
  const onFailure = res => {
    console.log('failure response--', res);
    setloading(false);
    Alert.alert('Failed', res?.message || 'Select mode Failed');
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader icon={appIcons.backArrow} title={'Select Mode'} />

        <View>
          <Text style={styles.titleStyle}>{`Mode`}</Text>
          <Dropdown
            style={[styles.dropDownStyle]}
            placeholderStyle={styles.placeholder}
            selectedTextStyle={styles.selectedTextStyle}
            data={modes}
            labelField="label"
            valueField="value"
            placeholder={'Select your mode'}
            value={value}
            onChange={item => {
              setValue(item.value);
            }}
          />
          {/* <DropDownPicker
            dropDownContainerStyle={styles.dropDownItemsContianer}
            style={styles.dropDownStyle}
            placeholder="Please select your mode"
            placeholderStyle={styles.placeholder}
            open={open}
            value={value}
            items={modes}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setModes}
          /> */}
        </View>
        <View style={styles.aiEnd}>
          <SelectButton onPress={onPressTickButton} />
        </View>
      </View>
      {loading && <Loader loading={loading} />}
    </SafeAreaView>
  );
};

export default SelectMode;
