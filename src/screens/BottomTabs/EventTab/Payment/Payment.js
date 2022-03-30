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
import React, {useRef, useState} from 'react';
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
  checkConnected,
  colors,
  filterTeam,
  spacing,
} from '../../../../shared/exporter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {createToken} from '@stripe/stripe-react-native';
import {add_card_request} from '../../../../redux/actions';
import {useDispatch} from 'react-redux';

const button_list = [
  {id: 0, title: 'Visa Debit Card', icon: appIcons.visa, tick: false},
  {id: 1, title: 'Pay With Apple', icon: appIcons.capple, tick: false},
  {id: 2, title: 'Pay With Google', icon: appIcons.cgoogle, tick: false},
];
const payment_card_list = [
  {id: 0, title: 'Visa Debit Card', icon: appIcons.blueBg, tick: false},
  {id: 1, title: 'Visa Debit Card', icon: appIcons.orangeBg, tick: false},
  {id: 2, title: 'Visa Debit Card', icon: appIcons.blueBg, tick: false},
];

const Payment = ({navigation}) => {
  const [selection, setSelection] = useState({id: 0});
  const [cardSelection, setCardSelection] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [cardDetail, setcardDetail] = useState('');
  const [cardHolderName, setcardHolderName] = useState('');
  const [cardView, setcardView] = useState(true);
  const dispatch = useDispatch(null);
  const [isLoading, setisLoading] = useState(false);

  //References
  const addCardRef = useRef(null);

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

  //Add Card
  const addPayment = async () => {
    const isConnected = await checkConnected();
    if (isConnected) {
      try {
        if (cardHolderName != '') {
          // setisLoading(true);
          const data = await createToken({
            name: cardHolderName,
            type: 'Card',
          });
          const requestBody = {
            token: data?.token?.id,
          };
          console.log(requestBody);
          // const addCardSuccees = res => {
          //   addCardRef.current.hide();
          //   Alert.alert('Success', 'Card Saved Successfully');
          //   console.log('Card Added', res);
          //   setisLoading(false);
          // };
          // const addCardFailure = res => {
          //   addCardRef.current.hide();
          //   console.log('Card Failed', res);
          //   setisLoading(false);
          // };
          // dispatch(
          //   add_card_request(requestBody, addCardSuccees, addCardFailure),
          // );
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

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader title={'Payment Method'} icon={appIcons.backArrow} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.itemConatiner}>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            {cardView && payment_card_list.length > 0 ? (
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
                            cardSelection={cardSelection}
                            onPressCard={() => {
                              setCardSelection(item);
                              setSelection({});
                            }}
                            bgPic={item?.icon}
                            cardDate={'10/2025'}
                            cardNo={'xxxx xxxx xxxx 5689'}
                            title={'Phillip Smith'}
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
              <>
                <PrimaryHeading title={'Personal Details'} />
                <PaymentCardField
                  onChangeText={text => {
                    setcardHolderName(text);
                  }}
                />
              </>
            )}
            <View style={styles.aiCenter}>
              <Button
                onPress={() => {
                  // addPayment();
                  // setShowSuccess(true);
                }}
                title={'Proceed to pay'}
              />
            </View>

            <AddCardModal
              onAddPress={() => {
                addPayment();
              }}
              show={addCardRef}
              onChangeText={text => {
                setcardHolderName(text);
              }}
              bgColor={colors.white}
              onPressHide={() => {
                addCardRef?.current?.hide();
              }}
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
