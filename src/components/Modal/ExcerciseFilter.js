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
  onPressBody,
  selectedBody,
  selectedCategory,
  onPressCategory,
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
        />
        <View>
          <PrimaryHeading title={'Body Part'} />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={filterItems?.body}
            contentContainerStyle={styles.flatlistWrap}
            renderItem={({item}) => {
              return (
                <FilterBox
                  onPressItem={() => {
                    onSelectBody(item);
                  }}
                  title={item?.title}
                  backgroundColor={
                    item?.id == selectedBody?.id ? colors.p7 : colors.g10
                  }
                  titleColor={
                    item?.id == selectedBody?.id ? colors.p1 : colors.g1
                  }
                  borderColor={
                    item?.id == selectedBody?.id ? colors.p1 : colors.g1
                  }
                  borderWidth={item?.id == selectedBody?.id ? 1 : 0}
                />
              );
            }}
          />
          <PrimaryHeading title={'Category'} />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={filterItems?.category}
            contentContainerStyle={styles.flatlistWrap}
            renderItem={({item}) => {
              return (
                <FilterBox
                  onPressItem={() => {
                    onSelectCategory(item);
                  }}
                  title={item?.title}
                  backgroundColor={
                    item?.id == selectedCategory?.id ? colors.p7 : colors.g10
                  }
                  titleColor={
                    item?.id == selectedCategory?.id ? colors.p1 : colors.g1
                  }
                  borderColor={
                    item?.id == selectedCategory?.id ? colors.p1 : colors.g1
                  }
                  borderWidth={item?.id == selectedCategory?.id ? 1 : 0}
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
