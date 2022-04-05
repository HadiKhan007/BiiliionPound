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
} from '../../../../components';
import {
  appIcons,
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
  const joinSheetRef = useRef(null);
  const {upcoming_event_detail} = useSelector(state => state?.event);
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

  useEffect(() => {
    if (upcoming_event_detail?.status_event[0]?.status?.match('joined')) {
      joinSheetRef.current.show();
    }
  });

  const onEndSelection = () => {
    setSelectionModal(false);
  };
  //Join Team Events
  const joinEvent = async () => {
    if (selectCategoryItem) {
      const isConnected = await checkConnected();
      if (isConnected) {
        setisLoading(true);
        const requestBody = {
          user_teams: {
            team_id: selectCategoryItem?.id,
          },
        };
        const onSuccessJoin = res => {
          console.log('Event team Join Success', res);
          navigation?.navigate('Payment');
          setisLoading(false);
        };
        const onFailedJoin = res => {
          console.log('Event team Join Failed', res);
          Alert.alert('Error', res);
          setisLoading(false);
        };
        dispatch(
          join_event_team_request(requestBody, onSuccessJoin, onFailedJoin),
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
        style={styles.contentContainer}
        contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.firstConatiner}>
          {upcoming_event_detail?.users?.length != 0 ? (
            <View style={styles.headerContainer}>
              <OngoingItem
                titleStyle={styles.countStyle}
                imageHeight={35}
                imageWidth={35}
                width={'45%'}
                title={upcoming_event_detail?.users?.length}
                justifyContent={'center'}
                users_lists={upcoming_event_detail?.users}
              />
            </View>
          ) : null}
        </View>
        <View style={styles.itemConatiner}>
          <View style={styles.eventInfo}>
            <EventInfoCard
              events={upcoming_event_detail}
              title={upcoming_event_detail?.title}
              rightIcon={appIcons.user}
            />
          </View>
          {!upcoming_event_detail?.status_event[0]?.status?.match('joined') ? (
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
            <ReadMore
              numberOfLines={3}
              renderTruncatedFooter={_renderTruncatedFooter}
              renderRevealedFooter={_renderRevealedFooter}
              onReady={() => {
                console.log('hello');
              }}>
              <Text style={styles.description}>
                {upcoming_event_detail?.description}
              </Text>
            </ReadMore>
          </View>
          {/* Join NOW */}
          {!upcoming_event_detail?.status_event[0]?.status?.match('joined') ? (
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
      {selectionModal && (
        <CategorySelection
          data={upcoming_event_detail?.teams}
          setSelectItem={item => {
            setselectCategoryItem(item);
          }}
          selectItem={selectCategoryItem}
          title={'Category'}
          show={selectionModal}
          onPressHide={() => {
            setSelectionModal(false);
          }}
          onPressDone={onEndSelection}
        />
      )}
      <AddNewExercise
        show={joinSheetRef}
        onPressHide={() => {
          joinSheetRef?.current?.hide();
          if (
            !upcoming_event_detail?.status_event[0]?.status?.match('joined')
          ) {
            navigation?.navigate('Payment');
          }
        }}
        // onAddPress={() => {
        //   joinSheetRef?.current?.hide();
        //   navigation?.navigate('AddNewExercise');
        // }}
        bgColor={colors.gr1}
        textColor={colors.white}
        title={'Already Joined 5 Days to go'}
        nodeColor={colors.gr1}
        borderRightRadius={20}
        borderleftRadius={20}
      />
      {isLoading && <Loader loading={isLoading} />}
    </SafeAreaView>
  );
};

export default EventDetail;
