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

interface ExcerciseCardProps {
  name: string;
  isSelected: boolean;
  type: string;
  icon: any;
}

export const ExcerciseCard = ({
  name,
  isSelected,
  type,
  icon,
}: ExcerciseCardProps) => {
  if (isSelected) {
    return (
      <TouchableOpacity style={styles.selectedContainer}>
        <View style={styles.imageContainer}>
          <Image source={icon} resizeMode={'contain'} style={styles.image} />
        </View>

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
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={icon} resizeMode={'contain'} style={styles.image} />
      </View>

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
    paddingHorizontal: WP('3'),
    width: Dimensions.get('window').width,
  },
  selectedContainer: {
    flexDirection: 'row',
    paddingHorizontal: WP('3'),
    backgroundColor: colors.p3,
    paddingVertical: HP('1'),
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: 72,
    height: 72,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 10,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 56,
    height: 56,
    padding: WP('5'),
    borderRadius: 10,
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
