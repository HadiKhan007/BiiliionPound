import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Alert,
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
import {CardField, createToken} from '@stripe/stripe-react-native';
import {
  add_card_request,
  get_payment_cards_request,
  pay_with_debit_request,
} from '../../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

const button_list = [
  {id: 0, title: 'Visa Debit Card', icon: appIcons.visa, tick: false},
  {id: 1, title: 'Pay With Apple', icon: appIcons.capple, tick: false},
  {id: 2, title: 'Pay With Google', icon: appIcons.cgoogle, tick: false},
];

const Payment = ({navigation}) => {
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
  const isFocus = useIsFocused();
  //References
  const addCardRef = useRef(null);
  const {upcoming_event_detail, payment_card_list} = useSelector(
    state => state?.event,
  );

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

  //Get Cards
  const getPaymentCards = async () => {
    try {
      const isConnected = await checkConnected();
      if (isConnected) {
        const getCardsSuccees = res => {
          console.log('Get cards', res);
        };
        const getCardsFailure = res => {
          console.log('Get Cards Failed', res);
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
          setisLoading(true);
          const data = await createToken({
            name: cardHolderName,
            type: 'Card',
          });
          const requestBody = {
            token: data?.token?.id,
            name: cardHolderName,
          };
          const addCardSuccees = res => {
            addCardRef.current.hide();
            Alert.alert('Success', 'Card Saved Successfully');
            console.log('Card Added', res);
            setisLoading(false);
          };
          const addCardFailure = res => {
            addCardRef.current.hide();
            console.log('Card Failed', res);
            setisLoading(false);
          };
          dispatch(
            add_card_request(requestBody, addCardSuccees, addCardFailure),
          );
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
    } else if (selection?.title == 'Pay With Apple') {
      console.log('Apple Pay');
    } else if (selection?.title == 'Pay With Google') {
      console.log('Google Pay');
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
      const data = await createToken({
        name: cardHolderName,
        type: 'Card',
      });
      const requestBody = {
        stripe_token: data?.token?.id,
        event_id: upcoming_event_detail?.id,
      };
      console.log(requestBody);
      const payWithDebitSuccees = res => {
        console.log('Pay with Debit Success', res);
        setShowSuccess(true);
        setisLoading(false);
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
      Alert.alert('Message', 'Please enter cardholder name');
    }
  };
  //Proceed With Selected Card
  const payWithSelectedCardHanlder = async () => {
    setisLoading(true);
    const requestBody = {
      card_id: cardSelection?.id,
      event_id: upcoming_event_detail?.id,
    };
    console.log(requestBody);
    const payWithSelectedCardSuccees = res => {
      console.log('Pay with selected card Success', res);
      setShowSuccess(true);
      setisLoading(false);
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

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader title={'Payment Method'} icon={appIcons.backArrow} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.itemConatiner}>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            {cardView && payment_card_list?.length > 0 ? (
              <>
                <TouchableOpacity
                  onPress={() => {
                    addCardRef.current.show();
                  }}
                  style={styles.btnContainer}>
                  <Text style={styles.btnStyles}>Add New Card +</Text>
                </TouchableOpacity>
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
                              setSelection({});
                            }}
                            bgPic={checkBrand(item?.brand_name)}
                            cardDate={`${item?.expiry}`}
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
                        title={item?.title}
                        selectedCard={selection}
                        onPressCard={() => {
                          setSelection(item);
                          if (button_list[0].id == item.id) {
                            setCardSelection('');
                            setcardView(true);
                          } else {
                            setCardSelection('Show');
                            setcardView(false);
                          }
                        }}
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
                    style={styles.cardInputStyle}
                    cardStyle={styles.cardStyle}
                    postalCodeEnabled={false}
                  />
                </View>
                <PaymentCardField
                  onChangeText={text => {
                    setcardHolderName(text);
                  }}
                />
              </View>
            )}
            <View style={styles.aiCenter}>
              <Button
                onPress={() => {
                  proceedToPay();
                }}
                title={'Proceed to pay'}
              />
            </View>

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
            />
          </KeyboardAwareScrollView>
        </ScrollView>
      </View>

      <TransactionSuccess
        _renderTruncatedFooter={_renderTruncatedFooter}
        _renderRevealedFooter={_renderRevealedFooter}
        show={showSuccess}
        onPressHide={() => {
          setShowSuccess(false);
        }}
        totalpounds={'5,722'}
      />
      {isLoading && <Loader loading={isLoading} />}
    </SafeAreaView>
  );
};

export default Payment;
