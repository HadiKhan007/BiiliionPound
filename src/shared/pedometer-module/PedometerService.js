import React from 'react';
import {NativeModules} from 'react-native';

const {RCTPedometerModule} = NativeModules;

// export const isPedometerAvaialble = callback => {
//   return RCTPedometerModule?.isPedometerAvaialble(callback);
// };

export {RCTPedometerModule};
