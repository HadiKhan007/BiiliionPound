import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import {
  AppHeader,
  OngoingItem,
  EventInfoCard,
  Button,
  CategorySelection,
  AddNewExercise,
  Loader,
  EventStatusCard,
} from '../../../../components';
import {
  appIcons,
  calculateCurrentDateDiff,
  calculateDateDiff,
  checkConnected,
  colors,
  spacing,
  WP,
} from '../../../../shared/exporter';
import ReadMore from 'react-native-read-more-text';
import {useDispatch, useSelector} from 'react-redux';
import {join_event_team_request} from '../../../../redux/actions';
const EventDetail = ({navigation}) => {
  const [selectionModal, setSelectionModal] = useState(false);
  const [selectCategoryItem, setselectCategoryItem] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  //References
  const {event_detail} = useSelector(state => state?.event);
  const dispatch = useDispatch(null);
  const _renderTruncatedFooter = handlePress => {
    return (
      <Text style={styles.readMoreStyle} onPress={handlePress}>
        Read more
      </Text>
    );
  };

  const _renderRevealedFooter = handlePress => {
    return (
      <Text style={styles.unreadStyle} onPress={handlePress}>
        Show less
      </Text>
    );
  };
  const onEndSelection = () => {
    setSelectionModal(false);
  };

  //Join Team Events
  const joinEvent = async () => {
    const isConnected = await checkConnected();
    if (isConnected) {
      if (selectCategoryItem) {
        setisLoading(true);
        const onSuccessJoin = res => {
          navigation?.navigate('Payment');
          setisLoading(false);
        };
        const onFailedJoin = res => {
          // console.log('Event team Join Failed', res);
          Alert.alert('Error', res);
          setisLoading(false);
        };
        dispatch(
          join_event_team_request(
            selectCategoryItem,
            onSuccessJoin,
            onFailedJoin,
          ),
        );
      } else {
        Alert.alert('Message!', 'Please select team');
      }
    } else {
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <AppHeader
        paddingHorizontal={WP('5')}
        title={'Event Details'}
        titleColor={colors.white}
        icon={appIcons.backArrow}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentContainer}
        contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.firstConatiner}>
          {event_detail?.users?.length != 0 ? (
            <View style={styles.headerContainer}>
              <OngoingItem
                titleStyle={styles.countStyle}
                title_part={'Going'}
                imageHeight={35}
                imageWidth={35}
                width={'45%'}
                title={event_detail?.users?.length}
                justifyContent={'center'}
                users_lists={event_detail?.users}
              />
            </View>
          ) : null}
        </View>
        <View style={styles.itemConatiner}>
          <View style={styles.eventInfo}>
            <EventInfoCard
              events={event_detail}
              title={event_detail?.title}
              rightIcon={appIcons.user}
              disabled={true}
            />
          </View>
          {!event_detail?.current_user?.event_status?.match('joined') &&
          event_detail?.status != 'closed' ? (
            <View style={styles.inputContainer}>
              <Text style={styles.titleStyle}>Select Team</Text>
              <TouchableOpacity
                onPress={() => {
                  setSelectionModal(true);
                }}
                style={styles.btnContainer}>
                <Text
                  style={[
                    styles.btnText,
                    {color: selectCategoryItem ? colors.p1 : colors.b1},
                  ]}>
                  {selectCategoryItem?.name || 'All Team'}
                </Text>
                <Image source={appIcons.rightIcon} style={styles.inputIcon} />
              </TouchableOpacity>
            </View>
          ) : null}
          {/* About Event Flow */}
          <View style={[styles.inputContainer, spacing.py3]}>
            <Text style={styles.titleStyle}>About The Event</Text>
            {event_detail?.description?.length > 50 ? (
              <ReadMore
                numberOfLines={3}
                renderTruncatedFooter={_renderTruncatedFooter}
                renderRevealedFooter={_renderRevealedFooter}
                onReady={() => {
                  // console.log('hello');
                }}>
                <Text style={styles.description}>
                  {event_detail?.description}
                </Text>
              </ReadMore>
            ) : (
              <Text numberOfLines={3} style={styles.description}>
                {event_detail?.description}
              </Text>
            )}
          </View>
          {/* Join NOW */}
          {!event_detail?.current_user?.event_status?.match('joined') &&
          event_detail?.status != 'closed' ? (
            <View style={styles.btnAlign}>
              <Button
                onPress={() => {
                  joinEvent();
                  // joinSheetRef?.current?.show();
                }}
                title={'Join'}
                withRightIcon={true}
              />
            </View>
          ) : null}
        </View>
      </ScrollView>
      {event_detail?.current_user?.event_status === 'joined' ? (
        <EventStatusCard
          bgColor={event_detail?.status == 'open' ? colors.gr1 : colors.y1}
          textColor={colors.white}
          title={
            event_detail?.status == 'open'
              ? `Already Joined ${calculateCurrentDateDiff(
                  event_detail?.start_date,
                )} to go`
              : `Event Finished!`
          }
          nodeColor={colors.gr1}
          borderRightRadius={20}
          borderleftRadius={20}
        />
      ) : (
        <>
          {event_detail?.status == 'closed' && (
            <EventStatusCard
              bgColor={colors.y1}
              textColor={colors.white}
              title={`Event Finished!`}
              nodeColor={colors.y1}
              borderRightRadius={20}
              borderleftRadius={20}
            />
          )}
        </>
      )}
      {selectionModal && (
        <CategorySelection
          data={[
            ...event_detail?.teams,
            {name: 'None', id: event_detail?.teams.length + 1},
          ]}
          setSelectItem={item => {
            setselectCategoryItem(item);
          }}
          selectItem={selectCategoryItem}
          title={'Select Team'}
          show={selectionModal}
          onPressHide={() => {
            setSelectionModal(false);
          }}
          onPressDone={onEndSelection}
        />
      )}
      {isLoading && <Loader loading={isLoading} />}
    </SafeAreaView>
  );
};

export default EventDetail;
