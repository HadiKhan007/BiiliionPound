import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Text, View} from 'react-native';
import styles from './styles';
import {AppHeader, FitnessCard, RepsInput} from '../../../../components';
import {
  appIcons,
  appImages,
  colors,
  spacing,
} from '../../../../shared/exporter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AddRaps = ({navigation}) => {
  const [inputList, setInputList] = useState([]);
  const [delItem, setdelItem] = useState([]);
  const [enableCheck, setenableCheck] = useState(false);

  const onPressDelItem = (item, index) => {
    inputList[index] = undefined;
    setInputList(inputList.filter(item => item != undefined));
  };
  const onFinish = () => {
    console.log(inputList);
  };

  const onAddConfirmed = (item, index, lbs, rep) => {
    if (item?.id == inputList[index]?.id) {
      inputList[index].lbsValue = lbs;
      inputList[index].repValue = rep;
      inputList[index].completeEditing = true;
    }
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
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={styles.flatStyle}>
          <View style={styles.topItems}>
            <FitnessCard icon={appImages.sample_exercise} />
            <Text style={styles.title}>Front Raises</Text>
            <Text style={styles.subtitle}>Shoulder</Text>
          </View>
          <Text style={styles.header}>Front Raises (Dumbbell)</Text>
          <FlatList
            data={inputList}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <RepsInput
                  item={item}
                  onDeletePress={() => {
                    onPressDelItem(item, index);
                  }}
                  onItemAdded={(lbs, rep) => {
                    onAddConfirmed(item, index, lbs, rep);
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
                  onItemAdded={(lbs, rep) => {
                    console.log(lbs, rep);
                    setenableCheck(!enableCheck);
                  }}
                  enableCheck={enableCheck}
                  onPressAddSet={(lbs, reps) => {
                    setInputList([
                      ...inputList,
                      {
                        id: inputList.length + 1,
                        lbsValue: lbs,
                        repValue: reps,
                        completeEditing: true,
                      },
                    ]);
                  }}
                />
              );
            }}
          />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddRaps;
