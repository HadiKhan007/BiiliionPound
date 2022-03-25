import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {Checkbox, Title} from '..';
import {
  scrHeight,
  colors,
  size,
  family,
  period_list,
  appIcons,
} from '../../shared/exporter';

export const AddNewExercise = ({show, onPressHide, onAddPress}) => {
  return (
    <ActionSheet
      indicatorColor={colors.white}
      gestureEnabled={true}
      closable={true}
      onClose={onPressHide}
      ref={show}
      containerStyle={styles.containerStyle}>
      <TouchableOpacity onPress={onAddPress} style={styles.titleContainer}>
        <Image style={styles.icon12} source={appIcons.plus} />
        <Title color={colors.b7} title={'Create Exercise'} />
      </TouchableOpacity>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: scrHeight / 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon12: {
    height: 12,
    width: 12,
    resizeMode: 'contain',
    marginRight: 12,
    tintColor: colors.p1,
  },
});
