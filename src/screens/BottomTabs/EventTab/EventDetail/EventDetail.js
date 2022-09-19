import {
  Text,
  View,
  SafeAreaView,
  EmitterSubscription,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
  AppState,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
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
// import RNIap from 'react-native-iap';
import RNIap, {
  InAppPurchase,
  SubscriptionPurchase,
  finishTransaction,
  purchaseErrorListener,
  purchaseUpdatedListener,
  Subscription,
  PurchaseError,
} from 'react-native-iap';

let purchaseUpdateSubscription: EmitterSubscription;
let purchaseErrorSubscription: EmitterSubscription;

const itemSubs = Platform.select({
  default: ['com.billionpoundapp.app.iapId'],
});

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const IAPContext =
  IAPContext >
  {
    isSubscription: false,
    subscription: undefined,
    showPurchase: () => {},
  };

const EventDetail = ({navigation}) => {
  const [selectionModal, setSelectionModal] = useState(false);
  const [selectCategoryItem, setselectCategoryItem] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [isSubscription, setIsSubscription] = useState(false);
  const [subscription, setSubscription] = useState(undefined);

  // const yearlySubscription = Platform.select({
  //   ios: ['com.billionpoundapp.app.iapId'],
  //   // android: ['com.referralpro.yearlypackage'],
  // });

  //References
  const {event_detail} = useSelector(state => state?.event);
  const dispatch = useDispatch(null);

  // useEffect(async () => {
  //   handleGetSubscriptions();
  // }, []);

  // const handleGetSubscriptions = async () => {
  //   try {
  //     let product = await RNIap.getSubscriptions(yearlySubscription);
  //     console.log('product', product);
  //     if (product.length > 0) {
  //       await requestSubscription(product[0].productId);
  //       setTimeout(() => {}, 1000);
  //     } else {
  //       console.log('Inside else ');
  //     }
  //   } catch (error) {}
  // };

  // const requestSubscription = async sku => {
  //   console.log('SKU---', sku);
  //   try {
  //     const subscriptions = await RNIap.requestSubscription({sku});
  //     console.log('subscriptions--', subscriptions);
  //     if (subscriptions) {
  //     } else {
  //     }
  //   } catch (error) {}
  // };

  // const _checkReceipt = async () => {
  //   const isValidated = await checkReceipt();

  //   setIsSubscription(isValidated);
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 1000);
  // };

  const _requestSubscription = () => {
    // setShowLoading(true);
    if (subscription) {
      RNIap.requestSubscription(subscription.productId);
    }
  };

  // const _restorePurchases = () => {
  //   setShowLoading(true);
  //   RNIap.getAvailablePurchases()
  //     .then(purchases => {
  //       console.debug('restorePurchases');
  //       let receipt = purchases[0].transactionReceipt;
  //       if (Platform.OS === 'android' && purchases[0].purchaseToken) {
  //         receipt = purchases[0].purchaseToken;
  //       }
  //       AsyncStorage.setItem('receipt', receipt);
  //       setShowLoading(false);
  //       setIsSubscription(true);
  //       Alert.alert(
  //         ENV.language['restore successful'],
  //         ENV.language['you have successfully restored your purchase history'],
  //         [
  //           {
  //             text: ENV.language['ok'],
  //             onPress: () => actionSheetRef.current?.close(),
  //           },
  //         ],
  //       );
  //     })
  //     .catch(err => {
  //       console.debug('restorePurchases');
  //       console.error(err);
  //       setShowLoading(false);
  //       setIsSubscription(false);
  //       AsyncStorage.removeItem('receipt');
  //       Alert.alert(
  //         ENV.language['restore failed'],
  //         ENV.language['restore failed reason'],
  //       );
  //     });
  // };

  const _initIAP = useCallback(async (): Promise<void> => {
    RNIap.clearProductsIOS();

    try {
      const result = await RNIap.initConnection();
      console.log('in app purchase connection status--', result);
      await RNIap.flushFailedPurchasesCachedAsPendingAndroid();
      if (result === false) {
        Alert.alert("couldn't get in-app-purchase information");
        return;
      }
    } catch (err) {
      console.log('Error--', err);
      // console.error(err.code, err.message);
      // Alert.alert('fail to get in-app-purchase information');
    }

    purchaseUpdateSubscription = purchaseUpdatedListener(
      (purchase: InAppPurchase | SubscriptionPurchase) => {
        console.log('purchaseUpdatedListener');
        // setShowLoading(false);
        // setTimeout(() => {
        //   actionSheetRef.current?.close();
        // }, 400);
        const receipt =
          Platform.OS === 'ios'
            ? purchase.transactionReceipt
            : purchase.purchaseToken;
        if (receipt) {
          finishTransaction(purchase)
            .then(() => {
              console.log('receipt', receipt);
              // AsyncStorage.setItem('receipt', receipt);
              setIsSubscription(true);
            })
            .catch(() => {
              setIsSubscription(false);
              // Alert.alert('purchase is failed');
            });
        }
      },
    );

    purchaseErrorSubscription = purchaseErrorListener(
      (error: PurchaseError) => {
        // console.debug('purchaseErrorListener');
        console.error(error);
        // setShowLoading(false);
        if (error.code !== 'E_USER_CANCELLED') {
          // Alert.alert(
          //   ENV.language['purchase is failed'],
          //   ENV.language['the purchase is failed'],
          // );
        }
      },
    );

    const subscriptions = await RNIap.getSubscriptions(itemSubs);
    console.log('Subscriptions', subscriptions);
    // setSubscription({
    //   ...subscriptions[0],
    // });
  }, []);

  const handleAppStateChange = (nextAppState: string): void => {
    if (nextAppState === 'active') {
      // _checkReceipt();
    }
  };

  useEffect(async () => {
    await _initIAP();
    // _checkReceipt();
    AppState.addEventListener('change', handleAppStateChange);

    return (): void => {
      if (purchaseUpdateSubscription) {
        purchaseUpdateSubscription.remove();
      }
      if (purchaseErrorSubscription) {
        purchaseErrorSubscription.remove();
      }
      if (handleAppStateChange) {
        AppState.removeEventListener('change', handleAppStateChange);
      }
    };
  }, []);

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
        bounces={false}
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
                  requestSubscription();
                  // joinEvent();
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
