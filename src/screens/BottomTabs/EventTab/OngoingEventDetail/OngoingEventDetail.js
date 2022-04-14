import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  AppHeader,
  Button,
  HomeCircle,
  OngoingEventDetailCard,
  OngoingEventCard,
  OngoingItem,
  PrimaryHeading,
  Title,
  UpcomingEventCard,
} from '../../../../components';
import {
  appIcons,
  capitalizeFirstLetter,
  colors,
  convertNumberSystem,
  HP,
  profile_uri,
  spacing,
  WP,
} from '../../../../shared/exporter';
import {Divider} from 'react-native-elements';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {Image} from 'react-native-elements';
const OngoingEventDetail = ({navigation}) => {
  const {event_detail} = useSelector(state => state?.event);
  const onPressParticipate = async () => {
    if (event_detail?.current_user?.event_status == 'joined') {
      navigation?.navigate('ExerciseStack');
    } else {
      navigation?.navigate('EventDetail');
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader
          title={event_detail?.title}
          titleColor={colors.b7}
          icon={appIcons.backArrow}
        />
        <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
          <View style={styles.itemView}>
            <HomeCircle
              title={
                convertNumberSystem(event_detail?.total_pounds_lifted) || 0
              }
              subtitle={'Total Pounds Lifted'}
              onPressAdd={() => {
                navigation?.navigate('ExerciseStack');
              }}
            />
          </View>
          <OngoingEventDetailCard
            date={moment(event_detail?.start_date).format('ddd,MMM DD, YYYY')}
            sutitleDate={`${moment(event_detail?.start_date).format(
              'hh:mm A',
            )} - ${moment(event_detail?.end_date).format('hh:mm A')}`}
            title={event_detail?.title}
            subTitle={`${event_detail?.current_user?.event_weight_lifted} LBS`}
            price={event_detail?.price || 0}
            liftedAmount={convertNumberSystem(event_detail?.goal_amount) || 0}
            onPressCard={() => navigation.navigate('ActivityTab')}
            joined_team={event_detail?.current_user?.selected_team}
          />
          {event_detail?.users?.length > 0 ? (
            <>
              <OngoingItem
                title={`${event_detail?.users.length} People enrolled`}
                title_part={''}
                titleStyle={styles.countStyle}
                imageHeight={44}
                imageWidth={44}
                width={'46%'}
                users_lists={event_detail?.users}
              />
              <Title title={'Participants'} isLeft />

              <FlatList
                data={event_detail?.users}
                contentContainerStyle={spacing.mb12}
                renderItem={({item}) => {
                  console.log(item);
                  return (
                    <View style={styles.cardContainer}>
                      <View
                        style={{flexDirection: 'row', marginBottom: HP('1')}}>
                        <View style={styles.cardLeftContainer}>
                          <Image
                            source={{uri: item?.profile_image || profile_uri}}
                            style={styles.icon44}
                            progressiveRenderingEnabled={true}
                            resizeMode={'cover'}
                          />
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={styles.titleStyle}>
                            {capitalizeFirstLetter(item.first_name)}{' '}
                            {capitalizeFirstLetter(item.last_name)}{' '}
                          </Text>
                          <Text style={styles.subtitleStyle}>
                            Lifted Amount :
                            <Text style={[styles.subtitleBoldStyle]}>
                              {' '}
                              {convertNumberSystem(
                                item?.event_weight_lifted,
                              )}{' '}
                              LBS
                            </Text>
                          </Text>
                        </View>
                      </View>
                      {event_detail?.users.length - 1 > item.id && (
                        <Divider style={styles.dividerStyle} />
                      )}
                    </View>
                  );
                }}
              />
            </>
          ) : null}
          {/* <View style={styles.selectionBtn}>
            <SelectButton
              onPress={() => {
                onPressDone();
              }}
            />
          </View> */}
        </ScrollView>
        <View style={styles.btnBottom}>
          <Button
            title="Participate"
            withRightIcon
            onPress={() => {
              onPressParticipate();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OngoingEventDetail;
