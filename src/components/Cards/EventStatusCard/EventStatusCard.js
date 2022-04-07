import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
} from 'react-native';
import {Title} from '../..';
import {colors, scrHeight} from '../../../shared/exporter';

export const EventStatusCard = ({
  onAddPress,
  icon,
  title,
  bgColor,
  textColor,
  borderleftRadius,
  borderRightRadius,
}) => {
  return (
    <View style={{backgroundColor: colors.white}}>
      <View
        style={[
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: scrHeight / 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gr1,
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
