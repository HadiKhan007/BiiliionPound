// RCTCalendarModule.m
#import "RCTPedometerModule.h"
#import <UIKit/UIKit.h>
#import <React/RCTLog.h>

@implementation RCTPedometerModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE(RCTPedometerModule);

RCT_EXPORT_METHOD(isPedometerAvailable:(NSString *)title callback: (RCTResponseSenderBlock)callback)
{
  NSInteger eventId = 2;
  callback(@[@(eventId)]);
  RCTLogInfo(@"Pretending to create an event %@ at %@", title, location);
}


@end
