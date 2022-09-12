import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const StepsSettingsTab = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>{`Settings`}</Text>

        <View style={styles.calculationContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>{`Achievements`}</Text>
            <Text style={styles.history}>{`History`}</Text>
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
      </View>
    </SafeAreaView>
  );
};

export default StepsSettingsTab;
