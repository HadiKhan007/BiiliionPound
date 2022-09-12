import {SafeAreaView, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import {AppHeader, SelectButton} from '../../../components';
import {appIcons} from '../../../shared/exporter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const PersonalInfo = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [gender, setGender] = useState([
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Other', value: 'other'},
  ]);

  const onPressTickButton = () => {
    if (value != null) {
      navigation.navigate('StepsMainFlow');
    } else {
      alert('Please select your gender first');
    }
  };

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
            <TextInput placeholder="0 ft" style={styles.inputStyle} />
            <TextInput placeholder="0 inc" style={styles.inputStyle} />
          </View>

          <Text style={[styles.titleStyle, {marginTop: '3%'}]}>{`Weight`}</Text>
          <TextInput
            placeholder="0 kg"
            style={[styles.inputStyle, {width: '100%'}]}
          />
        </KeyboardAwareScrollView>
        <View style={styles.aiEnd}>
          <SelectButton onPress={onPressTickButton} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PersonalInfo;
