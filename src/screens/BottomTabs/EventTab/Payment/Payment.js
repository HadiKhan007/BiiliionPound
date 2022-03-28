import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import {
  AppHeader,
  OngoingItem,
  EventInfoCard,
  Button,
  CategorySelection,
  AddNewExercise,
  PrimaryHeading,
  PaymentMethodCard,
  PaymentCard,
} from '../../../../components';
import {
  appIcons,
  colors,
  filterTeam,
  spacing,
} from '../../../../shared/exporter';

const Payment = ({navigation}) => {
  const [selection, setSelection] = useState(0);
  const button_list = [
    {id: 0, title: 'Visa Debit Card', icon: appIcons.visa, tick: false},
    {id: 1, title: 'Pay With Apple', icon: appIcons.apple, tick: false},
    {id: 2, title: 'Pay With Google', icon: appIcons.google, tick: false},
  ];
  const payment_card_list = [
    {id: 0, title: 'Visa Debit Card', icon: appIcons.blueBg, tick: false},
    {id: 1, title: 'Visa Debit Card', icon: appIcons.orangeBg, tick: false},
    {id: 2, title: 'Visa Debit Card', icon: appIcons.blueBg, tick: false},
  ];
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader title={'Payment Method'} icon={appIcons.backArrow} />
        <View style={styles.itemConatiner}>
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.btnStyles}>Add New Card +</Text>
          </TouchableOpacity>
          <View style={spacing.py3}>
            <PrimaryHeading title={'Saved Cards'} />
            <FlatList
              data={[1, 2, 3, 4, 5]}
              horizontal={true}
              renderItem={() => {
                return (
                  <View>
                    <PaymentCard />
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
          <View>
            <PrimaryHeading title={'Personal Details'} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Payment;
