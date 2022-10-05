import * as RNIap from 'react-native-iap';
import {Platform} from 'react-native';

export async function isSubscriptionActive() {
  try {
    if (Platform.OS === 'ios') {
      const availablePurchases = await RNIap?.getAvailablePurchases();
      const sortedAvailablePurchases = availablePurchases.sort(
        (a, b) => b.transactionDate - a.transactionDate,
      );
      const latestAvailableReceipt =
        sortedAvailablePurchases[0]?.transactionReceipt;
      const receiptBody = {
        'receipt-data': latestAvailableReceipt,
        password: '0a81761139ae463bb9d81ca8e430c5c1',
      };
      const result = await RNIap.validateReceiptIos(receiptBody, false);
      console.log('Result--', result);
      const {latest_receipt_info} = result;
      const isSubValid = !!latest_receipt_info?.find(receipt => {
        const expirationInMilliseconds = Number(receipt.expires_date_ms);
        const nowInMilliseconds = Date?.now();
        return expirationInMilliseconds > nowInMilliseconds;
      });
      const check = {
        validation: isSubValid,
        receipt: availablePurchases[0],
      };
      return check;
    }

    if (Platform.OS === 'android') {
      const availablePurchases = await RNIap?.getAvailablePurchases();
      if (availablePurchases.length > 0) {
        let check;
        for (let i = 0; i < availablePurchases.length; i++) {
          check = {
            validation: true,
            receipt: availablePurchases[i],
          };
        }
        return check;
      } else {
        return false;
      }
    }
  } catch (error) {
    console.log('Error--', error);
    return false;
  }
}
