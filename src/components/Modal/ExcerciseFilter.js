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
  filterCategory,
  onPressBody,
  onPressCategory,
  onPressSave,
  filterBody,
}) => {
  const onSelectBody = item => {
    onPressBody(item);
  };
  const onSelectCategory = item => {
    onPressCategory(item);
  };
  return (
    <Modal animationType="slide" style={styles.container} visible={show}>
      <SafeAreaView style={styles.contentContainer}>
        <AppHeader
          onPressBack={onPressHide}
          icon={appIcons.backArrow}
          title={'Filter'}
          subtitle={'Save'}
          onPressBtn={onPressSave}
        />
        <View>
          <PrimaryHeading title={'Body Part'} />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={filterBody}
            contentContainerStyle={styles.flatlistWrap}
            renderItem={({item, index}) => {
              return (
                <FilterBox
                  onPressItem={() => {
                    onSelectBody(index);
                  }}
                  title={item?.title}
                  backgroundColor={item?.tick ? colors.p7 : colors.g10}
                  titleColor={item?.tick ? colors.p1 : colors.g1}
                  borderColor={item?.tick ? colors.p1 : colors.g1}
                  borderWidth={item?.tick ? 1 : 0}
                />
              );
            }}
          />
          <PrimaryHeading title={'Category'} />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={filterCategory}
            contentContainerStyle={styles.flatlistWrap}
            renderItem={({item, index}) => {
              return (
                <FilterBox
                  onPressItem={() => {
                    onSelectCategory(index);
                  }}
                  title={item?.title}
                  backgroundColor={item?.tick ? colors.p7 : colors.g10}
                  titleColor={item?.tick ? colors.p1 : colors.g1}
                  borderColor={item?.tick ? colors.p1 : colors.g1}
                  borderWidth={item?.tick ? 1 : 0}
                />
              );
            }}
          />
        </View>
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
