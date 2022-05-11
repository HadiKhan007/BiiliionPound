import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {
  AppHeader,
  CategorySelection,
  Input,
  Loader,
  SelectButton,
} from '../../../../components';
import {
  AddNewExerciseFormFields,
  AddNewExerciseVS,
  appIcons,
  checkConnected,
  colors,
  filterBody,
  filterCategory,
} from '../../../../shared/exporter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {createCustomExercise} from '../../../../redux/actions/exercise-actions/exercise-actions';

const AddNewExcercise = ({navigation}) => {
  const [selectionModal, setSelectionModal] = useState(false);
  const [selectCategoryItem, setselectCategoryItem] = useState(null);
  const [selectBodyItem, setselectBodyItem] = useState(null);
  const [selectItemType, setselectItemType] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch(null);

  const createExercise = async values => {
    setLoading(true);
    const checkInternet = await checkConnected();

    const data = {
      name: values?.exercise_name,
      category: values?.category?.key,
      exercise_type: values?.bodyPart?.key,
    };
    console.log('===============form values=====================');
    console.log(data);
    console.log('====================================');

    const cbSuccess = res => {
      setLoading(false);
      navigation?.navigate('AddExercise');
    };

    const cbFailure = message => {
      setLoading(false);
    };

    if (checkInternet) {
      dispatch(createCustomExercise(data, cbSuccess, cbFailure));
    } else {
      setLoading(false);
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        {loading ? <Loader loading={loading} /> : null}
        <AppHeader icon={appIcons.backArrow} title={'Add New Workout'} />
        <Formik
          initialValues={AddNewExerciseFormFields}
          onSubmit={values => {
            // navigation?.navigate('AddExercise');
            createExercise(values);
          }}
          validationSchema={AddNewExerciseVS}>
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
            handleReset,
            setFieldValue,
          }) => {
            const onEndSelection = () => {
              setSelectionModal(false);
              if (selectItemType == 'Category') {
                setFieldValue('category', selectCategoryItem || '');
              } else {
                setFieldValue('bodyPart', selectBodyItem || '');
              }
            };
            return (
              <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.itemContainer}>
                  <View>
                    <Text style={styles.titleStyle}>Add Name</Text>
                    <Input
                      onChangeText={handleChange('exercise_name')}
                      renderErrorMessage={true}
                      placeholder="Enter Name"
                      value={values.exercise_name}
                      onBlur={() => setFieldTouched('exercise_name')}
                      blurOnSubmit={false}
                      disableFullscreenUI={true}
                      autoCapitalize="none"
                      touched={touched.exercise_name}
                      errorMessage={errors.exercise_name}
                    />
                  </View>
                  <View>
                    <Text style={styles.titleStyle}>Category</Text>
                    <TouchableOpacity
                      onPress={() => {
                        setSelectionModal(true);
                        setselectItemType('Category');
                      }}>
                      <Input
                        rightIcon={
                          <Image
                            source={appIcons.rightIcon}
                            style={styles.inputIcon}
                          />
                        }
                        editable={false}
                        onChangeText={handleChange('category')}
                        renderErrorMessage={true}
                        placeholder="Select Category"
                        value={values.category?.title}
                        onBlur={() => setFieldTouched('category')}
                        blurOnSubmit={false}
                        disableFullscreenUI={true}
                        autoCapitalize="none"
                        touched={touched.category}
                        errorMessage={errors.category}
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={styles.titleStyle}>Body Part</Text>
                    <TouchableOpacity
                      onPress={() => {
                        setSelectionModal(true);
                        setselectItemType('BodyPart');
                      }}>
                      <Input
                        rightIcon={
                          <Image
                            source={appIcons.rightIcon}
                            style={styles.inputIcon}
                          />
                        }
                        editable={false}
                        onChangeText={handleChange('bodyPart')}
                        renderErrorMessage={true}
                        placeholder="Select Body Part"
                        value={values.bodyPart?.title}
                        onBlur={() => setFieldTouched('bodyPart')}
                        blurOnSubmit={false}
                        disableFullscreenUI={true}
                        autoCapitalize="none"
                        touched={touched.bodyPart}
                        errorMessage={errors.bodyPart}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.aiEnd}>
                  <SelectButton disabled={!isValid} onPress={handleSubmit} />
                </View>
                {selectionModal && (
                  <CategorySelection
                    data={
                      selectItemType == 'Category' ? filterCategory : filterBody
                    }
                    setSelectItem={item => {
                      if (selectItemType == 'Category') {
                        console.log('selected item for category', item);
                        setselectCategoryItem(item);
                      } else {
                        console.log('selected item for body part', item);
                        setselectBodyItem(item);
                      }
                    }}
                    selectItem={
                      selectItemType == 'Category'
                        ? selectCategoryItem
                        : selectBodyItem
                    }
                    title={
                      selectItemType == 'Category' ? 'Category' : 'Body Part'
                    }
                    show={selectionModal}
                    onPressHide={() => {
                      setSelectionModal(false);
                    }}
                    onPressDone={onEndSelection}
                  />
                )}
              </KeyboardAwareScrollView>
            );
          }}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default AddNewExcercise;
