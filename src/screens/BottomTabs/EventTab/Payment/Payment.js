import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import {
  AppHeader,
  Button,
  PrimaryHeading,
  PaymentMethodCard,
  PaymentCard,
  PaymentCardField,
  AddCardModal,
  TransactionSuccess,
  Loader,
} from '../../../../components';
import {
  appIcons,
  checkBrand,
  checkConnected,
  colors,
  filterTeam,
  spacing,
} from '../../../../shared/exporter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  CardField,
  confirmApplePayPayment,
  createGooglePayPaymentMethod,
  createToken,
  presentApplePay,
} from '@stripe/stripe-react-native';
import {
  add_card_request,
  get_payment_cards_request,
  join_event_request,
  pay_with_debit_request,
  pay_with_social_request,
} from '../../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {useApplePay, useGooglePay} from '@stripe/stripe-react-native';

const button_list = [
  {id: 0, title: 'Visa Debit Card', icon: appIcons.visa, tick: false},
  {
    id: 1,
    title: Platform.OS == 'android' ? 'Pay With Google' : 'Pay With Apple',
    icon: appIcons.capple,
    tick: false,
  },
];

const Payment = ({navigation, route}) => {
  const [selection, setSelection] = useState({
    id: 0,
    title: 'Visa Debit Card',
    icon: appIcons.visa,
    tick: false,
  });
  const [cardSelection, setCardSelection] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [cardHolderName, setcardHolderName] = useState('');
  const [cardView, setcardView] = useState(true);
  const dispatch = useDispatch(null);
  const [isLoading, setisLoading] = useState(false);
  const [isPayLoading, setisPayLoading] = useState(false);

  //Stripe Initialization
  const {isApplePaySupported, loading} = useApplePay();
  const {initGooglePay} = useGooglePay();
  const [googlePayError, setgooglePayError] = useState('');
  const isFocus = useIsFocused();
  //References
  const addCardRef = useRef(null);
  const stripeField = useRef(null);
  const {
    event_detail,
    payment_card_list,
    pay_with_social,
    pay_with_debit,
    join_team_event,
  } = useSelector(state => state?.event);

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
  //Get All Cards
  useEffect(() => {
    getPaymentCards();
  }, [isFocus]);

  //Init Google Pay
  useEffect(() => {
    if (Platform.OS == 'android') {
      initializeGooglePay();
    }
  }, []);

  //Init handler
  const initializeGooglePay = async () => {
    const {error} = await initGooglePay({
      testEnv: true,
      merchantName: 'Example Merchant',
      countryCode: 'US',
      existingPaymentMethodRequired: true,
    });

    if (error) {
      console.log(error);
      setgooglePayError(error.message);
      return;
    }
  };

  //Get Cards
  const getPaymentCards = async () => {
    try {
      const isConnected = await checkConnected();
      if (isConnected) {
        const getCardsSuccees = res => {
          console.log('Get cards Success');
        };
        const getCardsFailure = res => {
          console.log('Get Cards Failed');
        };
        dispatch(get_payment_cards_request(getCardsSuccees, getCardsFailure));
      }
    } catch (error) {
      console.log('Get Cards Error', error);
    }
  };

  //Add Card
  const addCardHanlder = async () => {
    const isConnected = await checkConnected();
    if (isConnected) {
      try {
        if (cardHolderName != '') {
          setisPayLoading(true);
          setTimeout(async () => {
            const data = await createToken({
              name: cardHolderName,
              type: 'Card',
              setupFutureUsage: 'OffSession',
            });
            if (data?.token?.id) {
              const requestBody = {
                token: data?.token?.id,
                name: cardHolderName,
              };
              const addCardSuccees = res => {
                addCardRef.current.hide();
                Alert.alert('Success', 'Card Saved Successfully');
                // console.log('Card Added', res);
                stripeField?.current?.clear();
                setcardHolderName('');
                setisPayLoading(false);
              };
              const addCardFailure = res => {
                addCardRef.current.hide();
                Alert.alert('Error', res);
                setisPayLoading(false);
              };

              dispatch(
                add_card_request(requestBody, addCardSuccees, addCardFailure),
              );
            } else {
              Alert.alert('Failed', 'Unable to proceed payment!');
              setisPayLoading(false);
            }
          }, 500);
        } else {
          Alert.alert('Message', 'Please enter cardholder name');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  //Proceed To Pay
  const proceedToPay = () => {
    if (selection?.title == 'Visa Debit Card') {
      payWithDebitCardHanlder();
    } else if (cardSelection) {
      payWithSelectedCardHanlder();
    } else {
      Alert.alert('Message!', 'Please select payment method');
    }
  };

  //Proceed With Debit Card
  const payWithDebitCardHanlder = async () => {
    if (cardHolderName != '') {
      setisLoading(true);
      setTimeout(async () => {
        const data = await createToken({
          name: cardHolderName,
          type: 'Card',
          setupFutureUsage: 'OffSession',
        });
        if (data?.token?.id) {
          const requestBody = {
            stripe_token: data?.token?.id,
            event_id: event_detail?.id,
            team_id:
              join_team_event?.name != 'None' ? join_team_event?.id : null,
          };
          const payWithDebitSuccees = res => {
            console.log('Pay with Debit Success');
            setShowSuccess(true);
            setisLoading(false);
            stripeField?.current?.clear();
          };
          const payWithDebitFailure = res => {
            Alert.alert('Failed', res);
            setisLoading(false);
          };
          dispatch(
            pay_with_debit_request(
              requestBody,
              payWithDebitSuccees,
              payWithDebitFailure,
            ),
          );
        } else {
          setisLoading(false);
          Alert.alert('Failed', 'Unable to proceed payment!');
        }
      }, 500);
    } else {
      Alert.alert('Message', 'Please enter cardholder name');
    }
  };

  //Proceed With Selected Card
  const payWithSelectedCardHanlder = async () => {
    setisLoading(true);
    const requestBody = {
      card_id: cardSelection?.id,
      event_id: event_detail?.id,
      team_id: join_team_event?.name != 'None' ? join_team_event?.id : null,
    };
    const payWithSelectedCardSuccees = res => {
      console.log('Pay with selected Card');
      setisLoading(false);
      setShowSuccess(true);
    };
    const payWithSelectedCardFailure = res => {
      Alert.alert('Failed', res);
      setisLoading(false);
    };
    dispatch(
      pay_with_debit_request(
        requestBody,
        payWithSelectedCardSuccees,
        payWithSelectedCardFailure,
      ),
    );
  };

  //Proceed With Apple Pay
  const applePay = async () => {
    const checkInternet = await checkConnected();
    if (checkInternet) {
      setisLoading(true);
      if (!isApplePaySupported) return;
      const {error, paymentMethod} = await presentApplePay({
        cartItems: [
          {
            label: event_detail?.title,
            amount: JSON.stringify(event_detail?.price),
          },
        ],
        country: 'US',
        currency: 'USD',
        requiredBillingContactFields: ['phoneNumber', 'name'],
      });
      if (error) {
        setisLoading(false);
        // handle error
      } else {
        if (paymentMethod) {
          const onSuccessApplePay = async res => {
            // console.log('Apple Pay Success', res);
            const {error} = await confirmApplePayPayment(
              res?.Apple?.client_secret,
            );
            if (error) {
              Alert.alert('Error', 'Unable to proceed payment');
              setisLoading(false);
            } else {
              setShowSuccess(true);
              setisLoading(false);
            }
          };
          const onFailedApplePay = res => {
            console.log(res);
            console.log('Apple Pay Failed');
            setisLoading(false);
          };

          //Apple Pay Request Sending
          const requestBody = {
            event_id: event_detail?.id,
            team_id:
              join_team_event?.name != 'None' ? join_team_event?.id : null,
          };

          dispatch(
            pay_with_social_request(
              requestBody,
              onSuccessApplePay,
              onFailedApplePay,
            ),
          );
        }
      }
    } else {
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  //Proceed With Google Pay
  const googlePay = async () => {
    console.log('Google Pay');
    const {error, paymentMethod} = await createGooglePayPaymentMethod({
      amount: 12,
      currencyCode: 'USD',
    });

    if (error) {
      Alert.alert(error.code, error.message);
      return;
    } else if (paymentMethod) {
      Alert.alert(
        'Success',
        `The payment method was created successfully. paymentMethodId: ${paymentMethod.id}`,
      );
    }
  };

  //Join Evenet
  // const joinEvent = () => {
  //   const requestBody = {
  //     user_event: {
  //       event_id: event_detail?.id,
  //       team_id: join_team_event?.name != 'None' ? join_team_event?.id : null,
  //     },
  //   };
  //   const onSuccessJoin = res => {
  //     // console.log('Event Join Success', res);
  //     setShowSuccess(true);
  //     setisLoading(false);
  //   };
  //   const onFailedJoin = res => {
  //     console.log('Event Join Failed', res);
  //     Alert.alert('Error', res);
  //     setisLoading(false);
  //   };

  //   dispatch(join_event_request(requestBody, onSuccessJoin, onFailedJoin));
  // };
  const socialLogin = item => {
    setCardSelection('Hide');
    setcardView(false);
    if (item?.title == 'Pay With Google') {
      googlePay();
    } else if (item?.title == 'Pay With Apple') {
      applePay();
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader title={'Payment Method'} icon={appIcons.backArrow} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.itemConatiner}>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            {cardView && (
              <TouchableOpacity
                onPress={() => {
                  addCardRef.current.show();
                }}
                style={styles.btnContainer}>
                <Text style={styles.btnStyles}>Add New Card +</Text>
              </TouchableOpacity>
            )}
            {cardView && payment_card_list?.length > 0 ? (
              <>
                <View style={spacing.py3}>
                  <PrimaryHeading title={'Saved Cards'} />
                  <FlatList
                    data={payment_card_list}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => {
                      return (
                        <View style={[spacing.mr3, spacing.my3]}>
                          <PaymentCard
                            card_list={payment_card_list}
                            cardSelection={cardSelection}
                            onPressCard={() => {
                              setCardSelection(item);
                              setSelection({id: 0});
                            }}
                            bgPic={checkBrand(item?.brand_name)}
                            cardDate={`${item?.expiry_month || '1'}/${
                              item?.expiry
                            }`}
                            cardNo={item?.card_no}
                            title={item?.name}
                            index={index}
                          />
                        </View>
                      );
                    }}
                  />
                </View>
              </>
            ) : null}

            <View style={spacing.pb2}>
              <PrimaryHeading title={'Payment Type'} />
              <FlatList
                data={button_list}
                renderItem={({item, index}) => {
                  return (
                    <View style={spacing.py3}>
                      <PaymentMethodCard
                        applePaySupport={isApplePaySupported}
                        title={item?.title}
                        selectedCard={selection}
                        onPressCard={() => {
                          setSelection(item);
                          if (button_list[0].id == item.id) {
                            setCardSelection('');
                            setcardView(true);
                          } else {
                            socialLogin(item);
                          }
                        }}
                        error={googlePayError}
                        icon={item?.icon}
                        index={index}
                      />
                    </View>
                  );
                }}
              />
            </View>
            {!cardSelection && (
              <View>
                <PrimaryHeading title={'Personal Details'} />
                <View style={styles.fieldContainer}>
                  <CardField
                    ref={stripeField}
                    style={styles.cardInputStyle}
                    cardStyle={styles.cardStyle}
                    postalCodeEnabled={false}
                  />
                </View>
                <PaymentCardField
                  placeholder={{
                    number: 'Card Number',
                  }}
                  onChangeText={text => {
                    setcardHolderName(text);
                  }}
                />
              </View>
            )}

            {!cardSelection || cardView ? (
              <View style={styles.aiCenter}>
                <Button
                  onPress={() => {
                    proceedToPay();
                  }}
                  title={'Proceed to pay'}
                />
              </View>
            ) : (
              false
            )}
            {isLoading && <Loader loading={isLoading} />}

            <AddCardModal
              onAddPress={() => {
                addCardHanlder();
              }}
              show={addCardRef}
              onChangeText={text => {
                setcardHolderName(text);
              }}
              bgColor={colors.white}
              onPressHide={() => {
                addCardRef?.current?.hide();
              }}
              paymentField={true}
              loading={isPayLoading}
            />
          </KeyboardAwareScrollView>
        </ScrollView>
      </View>

      <TransactionSuccess
        event_detail={event_detail}
        _renderTruncatedFooter={_renderTruncatedFooter}
        _renderRevealedFooter={_renderRevealedFooter}
        show={showSuccess}
        onPress={() => {
          setShowSuccess(false);
          navigation?.navigate('Event');
        }}
        transactionID={
          pay_with_debit?.transaction_id ||
          pay_with_social?.Apple?.id ||
          pay_with_social?.google?.id
        }
      />
    </SafeAreaView>
  );
};

export default Payment;
