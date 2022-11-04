//
//  Pedometer.swift
//  BillionPound
//
//  Created by apple on 27/10/2022.
//

import Foundation
import React
import CoreMotion

@objc(Pedometer)
class Pedometer : UIViewController {
  
//    @objc func pedometer(_ options: NSDictionary) -> Void {
//      DispatchQueue.main.async {
//        self.stepsCounter(options: options)
//      }
//    }
//
//  func stepsCounter(options: NSDictionary) -> Void {
//
//  }

  let activityManager = CMMotionActivityManager()
  let pedometer = CMPedometer()
  
  override func viewDidLoad(){
    super.viewDidLoad()
    
    if CMMotionActivityManager.isActivityAvailable() {
      self.activityManager.startActivityUpdates(to: OperationQueue.main){(data) in
        DispatchQueue.main.async {
          if let activity = data {
            if activity.running == true {
              print("Running")
            } else if(activity.walking == true){
              print("walking")
            }else if(activity.automotive == true){
              print("Automate")
            }
          }
        }
      }
    }else{
    }
    
    if CMPedometer.isStepCountingAvailable(){
      self.pedometer.startUpdates(from: Date()){ (data, error) in
        print("data == \(String(describing: data) )")
        if error == nil {
          if let response = data {
            DispatchQueue.main.async {
              print("Number of steps == \(response.numberOfSteps)")
//              self.Counter.text = "Step Counter : \(response.numberOfSteps)"
            }
          }
        }
      }
    }
  }
}
