import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, WP, family} from '../../../shared/exporter';
import {Icon} from 'react-native-elements';

interface FilterItemProps {
  title: string;
  selected: boolean;
  onPress: () => void;
  clearButton: boolean;
}

const FilterItem = ({
  title,
  selected,
  onPress,
  clearButton = false,
}: FilterItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        selected ? styles.selectedContainer : styles.container,
        {
          // width: clearButton ? 110 : 100,
          justifyContent: clearButton ? 'space-around' : 'center',
          // paddingHorizontal: clearButton ? 0 : WP('2'),
        },
      ]}>
      <Text
        numberOfLines={1}
        style={selected ? styles.selectedText : styles.text}>
        {title}
      </Text>
      {clearButton ? (
        <Icon
          type="entypo"
          name="cross"
          color={colors.p1}
          size={20}
          tvParallaxProperties={undefined}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default FilterItem;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 40,
    borderRadius: 40,
    backgroundColor: colors.greyBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: family.OpenSans_Regular,
    color: colors.mediumGrey,
  },
  selectedContainer: {
    width: 100,
    height: 40,
    borderRadius: 40,
    backgroundColor: colors.p5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.p1,
    flexDirection: 'row',
  },
  selectedText: {
    fontFamily: family.OpenSans_Regular,
    color: colors.p1,
  },
});
