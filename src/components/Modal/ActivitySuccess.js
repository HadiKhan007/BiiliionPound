import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Modal, Text} from 'react-native';
import {ActivityCard, AppHeader, FilterBox, PrimaryHeading} from '..';
import {appIcons, colors, family, size, WP} from '../../shared/exporter';

export const ActivitySuccess = ({
  show,
  onPressHide,
  cardIcon,
  name,
  type,
  weight,
  excercise,
  mode,
}) => {
  return (
    <Modal animationType="slide" style={styles.container} visible={show}>
      <SafeAreaView style={styles.contentContainer}>
        <AppHeader
          onPressBack={onPressHide}
          secondaryIcon={appIcons.cross}
          rightIcon={appIcons.share}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Congratulations!</Text>
          <ActivityCard
            name={name}
            type={type}
            weight={weight}
            excercise={excercise}
            mode={mode}
            cardIcon={cardIcon}
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
  title: {
    fontSize: size.h5,
    color: colors.p1,
    fontFamily: family.Poppins_SemiBold,
    paddingBottom: WP('10'),
  },
  content: {
    alignItems: 'center',
    paddingVertical: WP('50'),
  },
});
