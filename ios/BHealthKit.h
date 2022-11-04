//
//  BHealthKit.h
//  BillionPound
//
//  Created by Macbook  on 02/11/2022.
//

#ifndef BHealthKit_h
#define BHealthKit_h


#endif /* BHealthKit_h */

@import HealthKit;

@interface BHealthKit : NSObject <RCTBridgeModule>

@property (nonatomic) HKHealthStore* healthKitStore;

@end
