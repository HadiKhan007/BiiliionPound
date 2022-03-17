import React, {useState} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Modal,
  FlatList,
} from 'react-native';
import {AppHeader, FilterBox, PrimaryHeading} from '..';
import {appIcons, colors, WP} from '../../shared/exporter';

export const ExerciseFilter = ({
  show,
  onPressHide,
  filterItems,
  onPressItem,
  selectedItem,
}) => {
  const onSelectItem = item => {
    onPressItem(item);
  };
  return (
    <Modal animationType="slide" style={styles.container} visible={show}>
      <SafeAreaView style={styles.contentContainer}>
        <AppHeader
          onPressBack={onPressHide}
          icon={appIcons.backArrow}
          title={'Filter'}
          subtitle={'Save'}
        />
        <PrimaryHeading title={'Body Part'} />
        <FlatList
          data={filterItems}
          contentContainerStyle={styles.flatlistWrap}
          renderItem={({item}) => {
            return (
              <FilterBox
                onPressItem={() => {
                  onSelectItem(item);
                }}
                title={item?.title}
                backgroundColor={
                  item?.id == selectedItem?.id ? colors.p7 : colors.g10
                }
                titleColor={
                  item?.id == selectedItem?.id ? colors.p1 : colors.g1
                }
                borderColor={
                  item?.id == selectedItem?.id ? colors.p1 : colors.g1
                }
                borderWidth={item?.id == selectedItem?.id ? 1 : 0}
              />
            );
          }}
        />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: WP('5'),
  },
  flatlistWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
});
