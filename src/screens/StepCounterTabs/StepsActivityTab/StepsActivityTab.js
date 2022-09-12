import {Dimensions, SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import * as Progress from 'react-native-progress';
import {colors, WP} from '../../../shared/exporter';
import {BarChart} from 'react-native-chart-kit';

const StepsActivityTab = () => {
  const screenWidth = Dimensions.get('window').width;
  const chartConfig = {
    backgroundColor: '#c92ac7',
    backgroundGradientFrom: '#7bede2',
    backgroundGradientTo: '#dbb8cd',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>{`Reports`}</Text>
        <ScrollView>
          <View style={styles.progressbarContainer}>
            <View style={styles.innerContainer}>
              <Text style={styles.totalSteps}>{`Total Step Count`}</Text>
              <Text style={styles.remainingSteps}>
                {`1500 Steps Remaining`}
              </Text>
            </View>
            <Progress.Bar
              style={styles.progressBar}
              color={colors.p1}
              progress={0.5}
              width={500}
              height={9}
              borderRadius={10}
            />
          </View>
          <BarChart
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [
                {
                  data: [20, 45, 28, 80, 99, 43],
                },
              ],
            }}
            width={Dimensions.get('window').width - 16}
            height={220}
            yAxisLabel={'$'}
            chartConfig={{
              backgroundColor: '#10c9bd',
              backgroundGradientFrom: '#f2b40a',
              backgroundGradientTo: '#99f7e3',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{marginVertical: 8, borderRadius: 16}}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default StepsActivityTab;
