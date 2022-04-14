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
  selected_Category,
  selected_bodyPart,
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
                    onSelectBody(item);
                  }}
                  title={item?.title}
                  backgroundColor={
                    selected_bodyPart?.id == item?.id ? colors.p7 : colors.g10
                  }
                  titleColor={
                    selected_bodyPart?.id == item?.id ? colors.p1 : colors.g1
                  }
                  borderColor={
                    selected_bodyPart?.id == item?.id ? colors.p1 : colors.g1
                  }
                  borderWidth={selected_bodyPart?.id == item?.id ? 1 : 0}
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
                    onSelectCategory(item);
                  }}
                  title={item?.title}
                  backgroundColor={
                    selected_Category?.id == item?.id ? colors.p7 : colors.g10
                  }
                  titleColor={
                    selected_Category?.id == item?.id ? colors.p1 : colors.g1
                  }
                  borderColor={
                    selected_Category?.id == item?.id ? colors.p1 : colors.g1
                  }
                  borderWidth={selected_Category?.id == item?.id ? 1 : 0}
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
