import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
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
} from '../../../../components';
import {
  appIcons,
  colors,
  filterTeam,
  spacing,
} from '../../../../shared/exporter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Payment = ({navigation}) => {
  const [selection, setSelection] = useState({id: 0});
  const [cardSelection, setCardSelection] = useState();
  const [showSuccess, setShowSuccess] = useState(false);

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
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader title={'Payment Method'} icon={appIcons.backArrow} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.itemConatiner}>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
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
              <PrimaryHeading title={'Payment Type'} />
            </View>
            <View>
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
                        }}
                        icon={item?.icon}
                        index={index}
                      />
                    </View>
                  );
                }}
              />
            </View>
            <PrimaryHeading title={'Personal Details'} />
            <PaymentCardField />
            <View style={styles.aiCenter}>
              <Button
                onPress={() => {
                  setShowSuccess(true);
                }}
                title={'Proceed to pay'}
              />
            </View>
            <AddCardModal
              show={addCardRef}
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
    </SafeAreaView>
  );
};

export default Payment;
