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
import {Checkbox} from '..';
import {
  scrHeight,
  colors,
  size,
  family,
  period_list,
  appIcons,
  WP,
} from '../../shared/exporter';

export const PeriodModal = ({show, onPressHide, setPeriod, selectedPeriod}) => {
  const PeriodBox = ({item, index}) => {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>{item?.title}</Text>
        <Checkbox
          CheckImagestyle={styles.icon24}
          UnCheckImagestyle={styles.icon16}
          checkIcon={appIcons.radio}
          uncheckIcon={appIcons.circle}
          toggleCheckBox={selectedPeriod?.id == item?.id ? true : false}
          setToggleCheckBox={() => setPeriod(item)}
        />
      </View>
    );
  };
  return (
    <ActionSheet
      indicatorColor={colors.white}
      gestureEnabled={true}
      closable={true}
      onClose={onPressHide}
      ref={show}
      containerStyle={styles.containerStyle}>
      <View style={styles.modalContainer}>
        <FlatList
          data={period_list}
          renderItem={({item, index}) => {
            return <PeriodBox item={item} index={index} />;
          }}
        />
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: WP('55'),
  },
  icon16: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
  },

  icon24: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    left: 4,
  },
  modalContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  titleStyle: {
    fontSize: size.normal,
    color: colors.b9,
    fontFamily: family.OpenSans_Regular,
  },
});
