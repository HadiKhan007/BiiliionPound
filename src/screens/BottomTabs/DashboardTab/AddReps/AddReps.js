import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Text, View} from 'react-native';
import styles from './styles';
import {AppHeader, FitnessCard, RepsInput} from '../../../../components';
import {appIcons, appImages, colors} from '../../../../shared/exporter';

const AddRaps = ({navigation}) => {
  const [inputList, setInputList] = useState([]);
  const [delItem, setdelItem] = useState([]);

  const onPressDelItem = (item, index) => {
    inputList[index] = undefined;
    setInputList(inputList.filter(item => item != undefined));
  };
  const onFinish = () => {
    console.log(inputList);
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader
          icon={appIcons.backArrow}
          title={'Add Reps'}
          subtitle={'Finish'}
          onPressBtn={onFinish}
        />
        <View style={styles.topItems}>
          <FitnessCard icon={appImages.sample_exercise} />
          <Text style={styles.title}>Front Raises</Text>
          <Text style={styles.subtitle}>Shoulder</Text>
        </View>
        <View>
          <Text style={styles.header}>Front Raises (Dumbbell)</Text>
          <FlatList
            style={styles.margin0}
            data={inputList}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <RepsInput
                  item={item}
                  onDeletePress={() => {
                    onPressDelItem(item, index);
                  }}
                  backgroundColor={colors.white}
                  enableAddSet={false}
                  enableSwipe={true}
                />
              );
            }}
            ListFooterComponent={() => {
              return (
                <RepsInput
                  inputList={inputList}
                  backgroundColor={colors.p7}
                  enableAddSet={true}
                  enableSwipe={false}
                  onPressAddSet={(lbs, reps) => {
                    setInputList([
                      ...inputList,
                      {
                        id: inputList.length + 1,
                        lbsValue: lbs,
                        repValue: reps,
                        completeEditing: false,
                      },
                    ]);
                  }}
                />
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddRaps;
