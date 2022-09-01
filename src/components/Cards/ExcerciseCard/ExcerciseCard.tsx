import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
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
import {Image as RNImage} from 'react-native-elements';

interface ExcerciseCardProps {
  name: string;
  isSelected: boolean;
  type: string;
  icon: any;
  paddingHorizontal: number;
  onPressCard: () => {};
  onSelectionChange: (item) => {};
  selected: boolean;
  item: any;
  uniqueKey: any;
}

const ExcerciseCardComp = ({
  name,
  isSelected,
  type,
  icon,
  onPressCard,
  paddingHorizontal,
  selected,
  onSelectionChange,
  item,
  uniqueKey,
}: ExcerciseCardProps) => {
  React.useEffect(() => {}, [icon]);

  if (selected) {
    return (
      <TouchableOpacity
        key={uniqueKey}
        activeOpacity={0.8}
        onPress={() => {
          onSelectionChange(item);
        }}
        style={[
          styles.selectedContainer,
          {paddingHorizontal: paddingHorizontal},
        ]}>
        {/* <FitnessCard icon={icon} /> */}
        <Image
          source={icon}
          resizeMode={icon?.uri ? 'cover' : 'contain'}
          style={styles.image}
        />

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
      key={uniqueKey}
      activeOpacity={0.8}
      onPress={() => {
        onSelectionChange(item);
      }}
      style={[styles.container, {paddingHorizontal: paddingHorizontal}]}>
      {/* <FitnessCard icon={icon} /> */}
      <Image
        source={icon}
        key={uniqueKey}
        resizeMode={icon?.uri ? 'cover' : 'contain'}
        style={styles.image}
      />

      <View style={styles.titleContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.type}>{type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const ExcerciseCard = React.memo(ExcerciseCardComp);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // paddingHorizontal: WP('3'),
    width: Dimensions.get('window').width,
    paddingVertical: HP('1'),
    // marginVertical: HP('2'),
  },
  selectedContainer: {
    flexDirection: 'row',
    // paddingHorizontal: WP('3'),
    backgroundColor: colors.p7,
    paddingVertical: HP('1'),
    // marginVertical: HP('2'),

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
  image: {
    width: 56,
    height: 56,
    padding: WP('5'),
    borderRadius: 10,
  },
});
