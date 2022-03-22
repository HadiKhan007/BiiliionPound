import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {ActivityCard, AppHeader, Title} from '../../../components';
import {appIcons, appImages, spacing} from '../../../shared/exporter';

const Activity = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader title={'Activity'} />
        <View style={{flex: 1}}>
          <View style={styles.headerContainer}>
            <Title title={'Activity'} />
            <TouchableOpacity style={styles.btnContainer}>
              <Text style={styles.textStyle}>Weekly</Text>
              <Image source={appIcons.downArrow} style={styles.imageStyle} />
            </TouchableOpacity>
          </View>

          <FlatList
            data={[1, 2, 3, 4]}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={spacing.py2}>
                  <ActivityCard
                    name={'John Doe'}
                    type={'Shoulder'}
                    weight={'150LBS'}
                    excercise={'2x Front Raises'}
                    mode={'Front Raises'}
                    cardIcon={appImages.sample_exercise}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Activity;
