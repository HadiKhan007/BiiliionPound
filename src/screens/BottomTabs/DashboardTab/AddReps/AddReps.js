import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Text, View, Alert, Share} from 'react-native';
import styles from './styles';
import {
  ActivitySuccess,
  AppHeader,
  FitnessCard,
  Loader,
  RepsInput,
} from '../../../../components';
import {
  appIcons,
  appImages,
  capitalizeFirstLetter,
  checkConnected,
  colors,
  convertNumberSystem,
} from '../../../../shared/exporter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {
  create_exercise_workout_request,
  set_event_request,
} from '../../../../redux/actions';

const AddRaps = ({navigation}) => {
  const [inputList, setInputList] = useState([]);
  const [onSuccess, setonSuccess] = useState(false);
  const dispatch = useDispatch(null);
  const [isLoading, setisLoading] = useState(false);
  const {exercise_item, create_exercise_workout, exercise_screen} = useSelector(
    state => state?.exercise,
  );
  const {event_detail} = useSelector(state => state?.event);

  const onPressDelItem = (item, index) => {
    inputList[index] = undefined;
    setInputList(inputList.filter(item => item != undefined));
  };
  //ON FINISH
  const onFinish = async () => {
    const checkInternet = await checkConnected();
    if (checkInternet) {
      setisLoading(true);
      try {
        const filterRepitions = inputList.filter(item => {
          return {
            set: item?.set,
            lbs: item?.lbs,
            repetition: item?.repetition,
          };
        });
        const addExerciseSuccess = res => {
          setisLoading(false);
          setonSuccess(true);
        };
        const addExerciseFailed = res => {
          setisLoading(false);
          Alert.alert('Error', res);
        };
        const requestBody = {
          user_exercise: {
            exercise_id: exercise_item?.id,
            repetitions_attributes: filterRepitions,
            event_id: !exercise_screen ? event_detail?.id : null,
          },
        };
        dispatch(
          create_exercise_workout_request(
            requestBody,
            addExerciseSuccess,
            addExerciseFailed,
          ),
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  const onAddConfirmed = (item, index, lbs, rep, enableCheck) => {
    if (item?.set == inputList[index]?.set) {
      inputList[index].lbs = lbs;
      inputList[index].repetition = rep;
      inputList[index].completeEditing = !enableCheck;
    }
  };

  const shareReceipt = async () => {
    const result = await Share.share({
      title: 'BillionPound',
      message: `${create_exercise_workout?.user?.first_name} ${create_exercise_workout?.user?.last_name} join event ${create_exercise_workout?.exercise?.name} and total pounds lifted is ${create_exercise_workout?.total_lbs} LBS`,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  };

  //***********On Press On Going Events***********
  const OnEventComplete = async item => {
    const checkInternet = await checkConnected();
    if (checkInternet) {
      //Set Ongoing Success
      setisLoading(true);
      const onGoingPressSuccess = () => {
        navigation.navigate('OngoingEventDetail');
        // console.log('On Going Event Success');
        setisLoading(false);
      };
      //Set  onGoing event failure
      const onGoingPressFailure = () => {
        // console.log('On Going Event Failure');
        Alert.alert('Error', 'Something went wrong!');
        setisLoading(false);
      };

      dispatch(
        set_event_request(
          event_detail?.id,
          onGoingPressSuccess,
          onGoingPressFailure,
        ),
      );
    } else {
      setisLoading(false);
      Alert.alert('Error', 'Check your internet connectivity!');
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
          disabled={inputList.length > 0 ? false : true}
        />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={styles.flatStyle}>
          <View style={styles.topItems}>
            <FitnessCard
              icon={
                exercise_item?.exercise_image
                  ? {uri: exercise_item?.exercise_image}
                  : appImages.sample_exercise
              }
            />
            <Text style={styles.title}>{exercise_item?.name || ''}</Text>
            <Text style={styles.subtitle}>
              {exercise_item?.exercise_type || ''}
            </Text>
          </View>
          <Text style={styles.header}>
            {`${exercise_item?.name || ''} (${exercise_item?.category || ''})`}{' '}
          </Text>
          <FlatList
            data={inputList}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <RepsInput
                  index={index}
                  item={item}
                  onDeletePress={() => {
                    onPressDelItem(item, index);
                  }}
                  onItemAdded={(lbs, rep, enableCheck) => {
                    onAddConfirmed(item, index, lbs, rep, enableCheck);
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
                  onItemAdded={(lbs, rep) => {}}
                  onPressAddSet={(lbs, reps, enableCheck) => {
                    setInputList([
                      ...inputList,
                      {
                        set: inputList.length + 1,
                        lbs: lbs,
                        repetition: reps,
                        completeEditing: enableCheck,
                      },
                    ]);
                  }}
                />
              );
            }}
          />
        </KeyboardAwareScrollView>
      </View>
      {onSuccess && (
        <ActivitySuccess
          name={`${create_exercise_workout?.user?.first_name} ${create_exercise_workout?.user?.last_name}`}
          type={create_exercise_workout?.exercise?.exercise_type}
          weight={`${convertNumberSystem(
            create_exercise_workout?.total_lbs,
          )} LBS`}
          excercise={`${create_exercise_workout?.repetitions.length}x ${create_exercise_workout?.exercise?.name}`}
          mode={`${capitalizeFirstLetter(
            create_exercise_workout?.exercise?.name,
          )} (${create_exercise_workout?.exercise?.category})`}
          show={true}
          onPressHide={() => {
            setonSuccess(false);
            if (exercise_screen) {
              navigation?.replace('App');
            } else {
              OnEventComplete();
            }
          }}
          onPressShare={shareReceipt}
          cardIcon={
            create_exercise_workout?.exercise?.exercise_image_url
              ? {
                  uri: create_exercise_workout?.exercise?.exercise_image_url,
                }
              : appImages.sample_exercise
          }
        />
      )}
      {isLoading && <Loader loading={isLoading} />}
    </SafeAreaView>
  );
};

export default AddRaps;
