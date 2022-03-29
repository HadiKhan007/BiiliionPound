import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {
  colors,
  WP,
  family,
  appIcons,
  scrHeight,
  size,
} from '../../shared/exporter';
import {Checkbox} from '..';

export const CategorySelection = ({
  show,
  onPressHide,
  title,
  selectItem,
  setSelectItem,
  data,
  onPressDone,
}) => {
  const renderTextBox = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Checkbox
          checkIcon={appIcons.checked}
          uncheckIcon={appIcons.unchecked}
          toggleCheckBox={selectItem?.id == item?.id ? true : false}
          setToggleCheckBox={() => {
            setSelectItem(item);
          }}
          CheckImagestyle={styles.icon20}
          UnCheckImagestyle={styles.icon20}
        />
        <Text style={styles.titleStyle}>{item?.title || item?.name}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Modal onBackdropPress={onPressHide} isVisible={show}>
        <View style={styles.modalContainer}>
          <Text style={styles.header}>{title}</Text>
          <View style={styles.separator} />
          <FlatList data={data} renderItem={renderTextBox} />
          <TouchableOpacity onPress={onPressDone} style={styles.btnContainer}>
            <Text style={styles.btnText}>Done</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    backgroundColor: colors.white,
    paddingVertical: 20,
    borderRadius: 15,
    height: scrHeight / 1.4,
  },
  separator: {
    borderWidth: 0.5,
    borderColor: colors.g10,
    width: '100%',
    marginTop: WP('5'),
  },
  header: {
    fontFamily: family.OpenSans_Bold,
    fontSize: size.h5,
    color: colors.b7,
    textAlign: 'center',
  },
  icon20: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginRight: 4,
  },
  itemContainer: {
    paddingHorizontal: WP('5'),
    paddingVertical: WP('2'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.OpenSans_Regular,
  },
  btnContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.p1,
    height: 50,
    width: WP('40'),
    borderRadius: 100,
  },
  btnText: {
    fontFamily: family.OpenSans_Bold,
    fontSize: size.normal,
    color: colors.white,
  },
});
