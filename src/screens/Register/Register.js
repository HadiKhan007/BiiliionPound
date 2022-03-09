import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {family} from '../../shared/exporter';
import styles from './styles';
import {Input} from '../../components';
import {colors} from '../../shared/exporter';
import {Icon} from 'react-native-elements';

const Signup = ({params}) => {
  return (
    <SafeAreaView style={styles.main}>
      <WelcomeBox title={'Hey there,'} subtitle={'Create your account'} />
      <View style={styles.inputContainer}>
        <Input
          placeholder="First Name"
          leftIcon={
            <Icon
              type={'font-awesome'}
              name={'user'}
              size={22}
              color={colors.g1}
            />
          }
        />
        <Input
          placeholder="Last Name"
          leftIcon={
            <Icon
              type={'font-awesome'}
              name={'user'}
              size={22}
              color={colors.g1}
            />
          }
        />
        <Input
          placeholder="Email"
          leftIcon={
            <Icon
              type={'material'}
              name={'email'}
              size={22}
              color={colors.g1}
            />
          }
        />
        <Input
          placeholder="Password"
          secureTextEntry
          leftIcon={
            <Icon type={'material'} name={'lock'} size={22} color={colors.g1} />
          }
        />
      </View>
    </SafeAreaView>
  );
};

const WelcomeBox = ({title, subtitle}) => {
  return (
    <View style={styles.welcomeTextContainer}>
      <Text style={{fontFamily: family.OpenSans_Regular, fontSize: 15}}>
        {title}
      </Text>
      <Text style={{fontFamily: family.OpenSans_Bold, fontSize: 20}}>
        {subtitle}
      </Text>
    </View>
  );
};

export default Signup;
