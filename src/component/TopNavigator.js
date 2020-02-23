import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack';

import FACILITES from '../Screen/Facilites';
import BOOKINGS from '../Screen/ServiceProviderBooking';
import PROFILE from '../Screen/ServiceProviderProfile';
import EditProfile from '../Screen/ServiceProviderEditProfile';
import LoginServiceProvider from '../Screen/LoginAsServiceProvider';
import Config from "../../config";



const Profile=createSwitchNavigator({
  Profile:{screen:PROFILE},
  Config:Config.navigation,
 //main:Config.navigation,
 
  // EditProfile:{screen:EditProfile},
  // Confige:Config.navigation
})

// const classroom=createStackNavigator({
//   ClassRoom:{screen:ClassRoom},
//   Attendance:{screen:Attendance},
//   Review:{screen:Review}
// })
const TopTabNavigator = createMaterialTopTabNavigator(
  {
    FACILITES: {screen: FACILITES },
    BOOKINGS:{screen:BOOKINGS},
    PROFILE:{screen:Profile},
  },
  {
    tabBarOptions: {
    
      activeTintColor: "#6EF31A",
      style: {
        backgroundColor:'#45425d',
        height:55,
        //shadowColor:'black',
        
       // paddingVertical: 5,
        //backgroundColor: "#eaeaea"
      },
      labelStyle: {
        fontSize: 12,
        //fontFamily: Fonts.type.bold,
        fontWeight: "200"
,        color:"white"
      },
      headerBackTitleStyle: {
        color: "#000000",
        //fontFamily: Fonts.type.base,
        fontSize: 17
      }
    }
  }
);
const TabNavigator = createAppContainer( TopTabNavigator);
export default TabNavigator ;
