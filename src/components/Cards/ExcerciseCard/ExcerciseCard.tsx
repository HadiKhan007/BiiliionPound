import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  appImages,
  colors,
  family,
  WP,
  size,
  HP,
} from '../../../shared/exporter';
import {FitnessCard} from '../FitnessCard/FitnessCard';

interface ExcerciseCardProps {
  name: string;
  isSelected: boolean;
  type: string;
  icon: any;
  paddingHorizontal;
  onPressCard: () => {};
}

export const ExcerciseCard = ({
  name,
  isSelected,
  type,
  icon,
  onPressCard,
  paddingHorizontal,
}: ExcerciseCardProps) => {
  if (isSelected) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPressCard}
        style={[
          styles.selectedContainer,
          {paddingHorizontal: paddingHorizontal},
        ]}>
        <FitnessCard icon={icon} />

        <View style={styles.titleContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.type}>{type}</Text>
        </View>
        <Image
          source={appImages.selected_icon_button}
          resizeMode={'contain'}
          style={styles.selectedImage}
        />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPressCard}
      style={[styles.container, {paddingHorizontal: paddingHorizontal}]}>
      <FitnessCard icon={icon} />

      <View style={styles.titleContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.type}>{type}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // paddingHorizontal: WP('3'),
    width: Dimensions.get('window').width,
  },
  selectedContainer: {
    flexDirection: 'row',
    // paddingHorizontal: WP('3'),
    backgroundColor: colors.p7,
    paddingVertical: HP('1'),
    justifyContent: 'space-between',
  },

  titleContainer: {
    marginLeft: WP('3'),
    // justifyContent: 'space-around',
    marginVertical: HP('0.5'),
    flex: 1,
  },
  name: {
    fontFamily: family.OpenSans_SemiBold,
    fontSize: size.normal,
    color: colors.b7,
    marginVertical: 5,
  },
  type: {
    fontFamily: family.OpenSans_Regular,
    color: colors.g1,
    fontSize: size.xsmall,
  },
  selectedImage: {
    width: 36,
    height: 36,
    alignSelf: 'center',
  },
});
