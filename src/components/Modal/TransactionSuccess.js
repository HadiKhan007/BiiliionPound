import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Modal,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import {useSelector} from 'react-redux';
import {
  AboutEventCard,
  ActivityCard,
  AppHeader,
  Button,
  EventInfoCard,
  FilterBox,
  NormHeading,
  PrimaryHeading,
} from '..';
import {
  appIcons,
  colors,
  family,
  size,
  spacing,
  WP,
} from '../../shared/exporter';

export const TransactionSuccess = ({
  show,
  _renderTruncatedFooter,
  _renderRevealedFooter,
  onPress,
  upcoming_event_detail,
  transactionID,
}) => {
  return (
    <Modal animationType="slide" style={styles.container} visible={show}>
      <SafeAreaView style={styles.contentContainer}>
        <AppHeader title={'Payment Successful'} />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
          <View style={styles.header}>
            <View style={styles.tickContainer}>
              <Image source={appIcons.tick} style={styles.tickStyle} />
            </View>
            <NormHeading
              family={family.Poppins_Medium}
              title={'Transaction ID'}
              subtitle={'Total Paid'}
            />
            <NormHeading
              family={family.Poppins_SemiBold}
              title={transactionID}
              subtitle={`$${upcoming_event_detail?.price}`}
            />
          </View>
          <View style={styles.headingStyle}>
            <PrimaryHeading title={'Event Details'} />
            <View style={styles.center}>
              <Text style={styles.h1}>
                {upcoming_event_detail?.goal_amount || 0}
              </Text>
              <Text style={styles.h2}>Total Pounds Goals</Text>
            </View>
          </View>
          <View style={spacing.my2}>
            <EventInfoCard
              events={upcoming_event_detail}
              title={upcoming_event_detail?.title}
              subtitle={upcoming_event_detail?.subtitle || ''}
            />
          </View>

          {/* About Event Flow */}
          <View style={[spacing.py3]}>
            <Text style={styles.titleStyle}>About The Event</Text>
            <ReadMore
              numberOfLines={3}
              renderTruncatedFooter={_renderTruncatedFooter}
              renderRevealedFooter={_renderRevealedFooter}>
              <Text style={styles.description}>
                {upcoming_event_detail?.description}
              </Text>
            </ReadMore>
          </View>
          {/* About Event Flow  Read More only working in main container*/}
          <View style={styles.aiCenetr}>
            <Button title={'Done'} onPress={onPress} />
          </View>
        </ScrollView>
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
    flex: 1,
    paddingBottom: WP('10'),
  },
  header: {margin: 20},
  tickContainer: {
    height: 89,
    width: 89,
    borderRadius: 89,
    backgroundColor: colors.p1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  tickStyle: {
    height: 62,
    width: 62,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  headingStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  h1: {
    fontSize: size.h5,
    color: colors.p1,
    fontFamily: family.OpenSans_SemiBold,
  },
  h2: {
    fontFamily: family.OpenSans_Regular,
    fontSize: size.tiny,
    color: colors.g6,
    width: '80%',
    textAlign: 'center',
  },

  titleStyle: {
    fontSize: size.xxlarge,
    color: colors.b1,
    fontFamily: family.OpenSans_SemiBold,
    marginBottom: 10,
  },
  description: {
    fontSize: size.xsmall,
    color: colors.b10,
    fontFamily: family.OpenSans_Regular,
  },
  aiCenetr: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  center: {
    alignItems: 'center',
  },
});
