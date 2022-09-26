import {Dimensions, SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import * as Progress from 'react-native-progress';
import {colors, WP} from '../../../shared/exporter';
import {BarChart} from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const StepsActivityTab = () => {
  const data = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
      {
        data: [0, 10, 50, 30, 0, 0, 0],
        withDots: false,
        color: (opacity = 1) => `rgba(61, 178, 255)`,
        strokeWidth: 4,
      },
      {
        data: [100],
        withDots: false,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientTo: '#FFFFFF',
    decimalPlaces: 2, // optional, defaults to 2dp
    // labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    color: (opacity = 1) => `${colors.p1}`,
    strokeWidth: 4,
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
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

          <View style={styles.graphView}>
            <BarChart
              data={data}
              width={screenWidth - WP('20')}
              height={200}
              withHorizontalLines={false}
              withVerticalLines={false}
              withOuterLines={false}
              withDots={false}
              chartConfig={chartConfig}
              bezier
              fromZero={true}
              style={styles.chartStyle}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default StepsActivityTab;
