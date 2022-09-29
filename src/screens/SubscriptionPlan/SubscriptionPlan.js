import React, {useEffect, useState} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Loader} from '../../components';
import {appLogos, colors, isSubscriptionActive} from '../../shared/exporter';
import styles from './styles';
import {
  requestSubscription,
  clearTransactionIOS,
  initConnection,
  flushFailedPurchasesCachedAsPendingAndroid,
  getSubscriptions,
} from 'react-native-iap';
import {errorLog} from '../../shared/utilities/logs';
import {isAndroid, isIos} from '../../shared/utilities/platform';
import {isIOS} from 'react-native-elements/dist/helpers';

const SubscriptionPlan = ({navigation}) => {
  const [subscribe, setSubscribe] = useState(false);
  const [loading, setloading] = useState(false);
  const [subscriptins, setSubscriptins] = useState([]);
  const subscriptionSkus = Platform.select({
    ios: [
      'com.billionpoundapp.yearly.one',
      'com.billionpoundapp.yearly.premium',
    ],
    android: ['billion_pound_iap', 'bp_yearly_subscription'],
    default: [],
  });

  useEffect(() => {
    checkSubscriptions();
    // getAvailablepuechases();
    iapInitializer();
    if (isIOS) {
      handleGetSubscriptions();
    }
  }, []);

  const checkSubscriptions = async () => {
    setloading(true);
    try {
      const checkStatus = await isSubscriptionActive();
      console.log('checkStatus', checkStatus);
      if (checkStatus) {
        setloading(false);
        setSubscribe(false);
      } else {
        setloading(false);
        setSubscribe(true);
      }
      //update your subscription status here
    } catch (error) {}
  };

  const iapInitializer = async () => {
    try {
      await initConnection();
      if (isAndroid) {
        await flushFailedPurchasesCachedAsPendingAndroid();
      } else {
        /**
         * WARNING This line should not be included in production code
         * This call will call finishTransaction in all pending purchases
         * on every launch, effectively consuming purchases that you might
         * not have verified the receipt or given the consumer their product
         *
         * TL;DR you will no longer receive any updates from Apple on
         * every launch for pending purchases
         */
        await clearTransactionIOS();
      }
    } catch (error) {
      if (error instanceof PurchaseError) {
        errorLog({message: `[${error.code}]: ${error.message}`, error});
      } else {
        errorLog({message: 'finishTransaction', error});
      }
    }
  };

  const handleGetSubscriptions = async () => {
    try {
      await getSubscriptions({skus: subscriptionSkus}).then(subs => {
        console.log('Subscription--', subs);
        if (isIos) {
          setSubscriptins(subs);
        } else {
          handleBuySubscription(
            subs[0]?.productId,
            subs[0]?.subscriptionOfferDetails[0]?.offerToken,
          );
        }
      });
    } catch (error) {
      errorLog({message: 'handleGetSubscriptions', error});
    }
  };

  const handleBuySubscription = async (productId, offerToken) => {
    if (Platform.OS === 'android' && !offerToken) {
      console.log(`no subscription Offers for selected product: ${productId}`);
    }
    try {
      if (isIos) {
        setloading(true);
        console.log(subscriptins);
        await requestSubscription({
          sku: subscriptins[0]?.productId,
          ...(offerToken && {
            subscriptionOffers: [{sku: subscriptins[0]?.productId, offerToken}],
          }),
        })
          .then(res => {
            console.log('res--', res);
            setloading(false);
            navigation.goBack();
          })
          .catch(err => {
            setloading(false);
            console.log('Error', err);
          });
      } else {
        await requestSubscription({
          sku: productId,
          ...(offerToken && {
            subscriptionOffers: [{sku: productId, offerToken}],
          }),
        })
          .then(res => {
            console.log('res--', res);
            setloading(false);
            navigation.goBack();
          })
          .catch(err => {
            setloading(false);
            console.log('Error', err);
          });
      }
    } catch (error) {
      if (error instanceof PurchaseError) {
        errorLog({message: `[${error.code}]: ${error.message}`, error});
      } else {
        errorLog({message: 'handleBuySubscription', error});
      }
    }
  };

  // const getAvailablepuechases = async () => {
  //   if (isIos) {
  //     setloading(true);
  //     const availablePurchases = await getAvailablePurchases();
  //     const sortedAvailablePurchases = availablePurchases.sort(
  //       (a, b) => b.transactionDate - a.transactionDate,
  //     );
  //     const latestAvailableReceipt =
  //       sortedAvailablePurchases[0].transactionReceipt;
  //     console.log('latestAvailableReceipt', latestAvailableReceipt);
  //     if (latestAvailableReceipt) {
  //       setloading(false);
  //       setSubscribe(false);
  //     } else {
  //       setloading(false);
  //       setSubscribe(true);
  //     }
  //   }
  //   if (Platform.OS === 'android') {
  //     setloading(true);
  //     const subscriptionPurchase = await getAvailablePurchases();
  //     console.log('Purchased Subscription:', subscriptionPurchase);
  //     if (subscriptionPurchase) {
  //       if (subscriptionPurchase[0]?.autoRenewingAndroid) {
  //         setloading(false);
  //         setSubscribe(false);
  //       } else {
  //         setloading(false);
  //         setSubscribe(true);
  //       }
  //     } else {
  //       setloading(false);
  //       console.log('No subscription available--');
  //     }
  //   }
  // };

  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        source={appLogos.appLogo}
        style={styles.imageStyles}
        resizeMode="contain"
      />
      <View style={styles.innerContainer}>
        <View style={styles.subscriptionTitle}>
          <Text style={styles.subTitle}>Yearly Subscription</Text>
        </View>
        <Text style={styles.subDetail}>
          {/* {`Billion Pound\nAll access of events\n$50 /Yearly\n Auto Renewal`} */}
          {`Billion Pound\n$50 /Yearly\n Auto Renewal`}
        </Text>

        {/* <Text style={styles.nextBillingTilte}>{`When to next billing?`}</Text>
        <Text style={styles.nextBillingDate}>
          {`After a year when subscription started\n(estimated date Sep 26, 2013)`}
        </Text> */}
        <Text style={[styles.nextBillingTilte, {color: colors.p1}]}>
          {`BillionPound (Yearly)`}
        </Text>
        <View style={styles?.descText}>
          <Text style={styles.journalDetail}>
            {/* {`PERSONAL JOURNAL AND EVENTS. YOU CAN JOIN\nAS AN INDIVIDUAL OR ON A TEAM FOR FUN FITNESS\nCOMPETITION`} */}
            {`Yearly subscription grants access to the exclusive Billion Pounds fitness journal. Track your workouts and total pounds lifted! All members will receive access to the pedometer feature, coming soon!`}
          </Text>
        </View>
      </View>
      <View style={styles.btnAlign}>
        <Button
          onPress={() => {
            if (isIos) {
              handleBuySubscription();
            } else {
              handleGetSubscriptions();
            }
          }}
          // title={subscribe ? 'Subscribe' : 'unsubscribe'}
          title={'Subscribe'}
        />
      </View>
      <View style={styles.termsContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation?.navigate('Terms')}>
          <Text style={styles.termsOfUse}>{`Term of use`}</Text>
        </TouchableOpacity>
        <Text
          style={[
            styles.termsOfUse,
            {color: colors?.b1, textDecorationLine: 'none'},
          ]}>
          {` and  `}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation?.navigate('PrivacyPolicy')}>
          <Text style={styles.termsOfUse}>{` Privacy Policy`}</Text>
        </TouchableOpacity>
      </View>
      {loading && <Loader loading={loading} />}
    </ScrollView>
  );
};

export default SubscriptionPlan;
