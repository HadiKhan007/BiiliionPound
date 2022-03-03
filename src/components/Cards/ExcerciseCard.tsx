import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {appImages, colors, family, WP, size, HP} from '../../shared/exporter';

interface ExcerciseCardProps {
  name: string;
  isSelected: boolean;
  type: string;
  icon: string;
}

const ExcerciseCard = ({name, isSelected, type, icon}: ExcerciseCardProps) => {
  if (isSelected) {
    return (
      <TouchableOpacity style={styles.selectedContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={appImages.sampleExcercise}
            resizeMode={'contain'}
            style={styles.image}
          />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.type}>{type}</Text>
        </View>
        <Image
          source={appImages.selectedButton}
          resizeMode={'contain'}
          style={styles.selectedImage}
        />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={appImages.sampleExcercise}
          resizeMode={'contain'}
          style={styles.image}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.type}>{type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ExcerciseCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: WP('3'),
    width: Dimensions.get('window').width,
  },
  selectedContainer: {
    flexDirection: 'row',
    paddingHorizontal: WP('3'),
    width: Dimensions.get('window').width,
    backgroundColor: colors.p3,
    paddingVertical: HP('1'),
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: 90,
    height: 90,
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
    width: 70,
    height: 70,
    padding: WP('5'),
    borderRadius: 10,
  },
  titleContainer: {
    marginLeft: WP('3'),
    justifyContent: 'space-around',
    marginVertical: HP('0.5'),
    flex: 1,
  },
  name: {
    fontFamily: family.OpenSans_Bold,
    fontSize: size.medium,
  },
  type: {
    fontFamily: family.OpenSans_Regular,
    color: colors.mediumGrey,
  },
  selectedImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
});
