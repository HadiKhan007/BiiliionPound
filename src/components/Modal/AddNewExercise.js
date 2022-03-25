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

export const AddNewExercise = ({
  show,
  onPressHide,
  onAddPress,
  icon,
  title,
  bgColor,
  textColor,
  nodeColor,
  borderleftRadius,
  borderRightRadius,
}) => {
  return (
    <ActionSheet
      indicatorColor={nodeColor ? nodeColor : colors.white}
      gestureEnabled={true}
      closable={true}
      onClose={onPressHide}
      ref={show}
      containerStyle={[
        styles.containerStyle,
        {
          backgroundColor: bgColor,
          borderTopLeftRadius: borderleftRadius,
          borderTopRightRadius: borderRightRadius,
        },
      ]}>
      <TouchableOpacity onPress={onAddPress} style={styles.titleContainer}>
        {icon && <Image style={styles.icon12} source={icon} />}
        <Title color={textColor} title={title} />
      </TouchableOpacity>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
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
