import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {colors} from '../../../shared/exporter';
import LinearGradient from 'react-native-linear-gradient';

const StepsExerciseTab = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>{`Exercise`}</Text>

        <LinearGradient colors={colors.e_gradient} style={styles.btnContainer}>
          <Text style={styles.title}>{`Do you want to switch the mode?`}</Text>
          <Text style={styles.description}>
            {`You're currently in step mode, would you like to switch to weight mode? Your steps will continue to be counted while in weight mode Include buttons for "Stay in step mode”`}
          </Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.modeBtn}>
            <Text style={styles.title}>{`switch mode`}</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default StepsExerciseTab;
