// RCTCalendarModule.m
#import "RCTPedometerModule.h"
#import <UIKit/UIKit.h>

@implementation RCTPedometerModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE(PedometerModule);

//exports a method getDeviceName to javascript
RCT_EXPORT_METHOD(getDeviceName:(RCTResponseSenderBlock)callback){
 @try{
   NSString *deviceName = [[UIDevice currentDevice] name];
   callback(@[[NSNull null], deviceName]);
 }
 @catch(NSException *exception){
   callback(@[exception.reason, [NSNull null]]);
 }
}

@end
