import {SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {AppHeader, SelectButton} from '../../../components';
import {appIcons} from '../../../shared/exporter';
import DropDownPicker from 'react-native-dropdown-picker';

const SelectMode = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [modes, setModes] = useState([
    {label: 'Billion Pounds  (weight mode)', value: 'weight-mode'},
    {label: ' Billion Steps (step mode)', value: 'step-mode'},
  ]);

  const onPressTickButton = () => {
    if (value != null) {
      navigation.navigate('PersonalInfo');
    } else {
      alert('Please select mode first to proceed');
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader icon={appIcons.backArrow} title={'Select Mode'} />

        <View>
          <Text style={styles.titleStyle}>{`Mode`}</Text>
          <DropDownPicker
            dropDownContainerStyle={styles.dropDownItemsContianer}
            style={styles.dropDownStyle}
            placeholder="Please select your mode"
            open={open}
            value={value}
            items={modes}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setModes}
          />
        </View>
        <View style={styles.aiEnd}>
          <SelectButton onPress={onPressTickButton} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectMode;
