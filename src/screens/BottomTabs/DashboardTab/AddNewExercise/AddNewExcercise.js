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
  SelectButton,
} from '../../../../components';
import {
  AddNewExerciseFormFields,
  AddNewExerciseVS,
  appIcons,
  colors,
  filterBody,
  filterCategory,
} from '../../../../shared/exporter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';

const AddNewExcercise = ({navigation}) => {
  const [selectionModal, setSelectionModal] = useState(false);
  const [selectCategoryItem, setselectCategoryItem] = useState(null);
  const [selectBodyItem, setselectBodyItem] = useState(null);
  const [selectItemType, setselectItemType] = useState('');

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader icon={appIcons.backArrow} title={'Add New Exercise'} />
        <Formik
          initialValues={AddNewExerciseFormFields}
          onSubmit={values => {
            console.log(values);
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
                setFieldValue('category', selectCategoryItem?.title);
              } else {
                setFieldValue('bodyPart', selectBodyItem?.title);
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
                        value={values.category}
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
                        value={values.bodyPart}
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
                        setselectCategoryItem(item);
                      } else {
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
