import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";
import ShootScreen from './ShootScreen';
import OrderScreen from './OrderScreen';
import GuideScreen from './GuideScreen';
import ProfileScreen from './ProfileScreen';
import GuideAdd from './GuideAdd';
import BottomTab from '../component/BottomTab';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//npm install @react-navigation/bottom-tabs

const Tab = createMaterialBottomTabNavigator();
//const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    // <Tab.Navigator tabBar={props => <BottomTab {...props} />} headerShown={false}>
    //   <Tab.Screen
    //     name="Shoot"
    //     component={ShootScreen}
    //     options={{
    //       headerShown: false,
    //       tabBarLabel: 'Shoot',
    //       tabBarIcon: () => (
    //         <MaterialCommunityIcons name="home" size={24} />
    //       ),
    //       tabBarBadge: 3,
    //     }}

    //   />
    //   <Tab.Screen name="Order"  component={OrderScreen} options={{
    //     headerShown: false,
    //     tabBarIcon: ({ color }) => (
    //       <MaterialCommunityIcons name="note" color={color} size={26} />
    //     ),
    //   }} />
    //   <Tab.Screen name="Guide" component={GuideAdd} options={{
    //     headerShown: false,
    //     tabBarIcon: ({ color }) => (
    //       <MaterialCommunityIcons name="note" color={color} size={26} />
    //     ),
    //   }} />
    //   <Tab.Screen name="Profile" component={ProfileScreen} options={{
    //     headerShown: false,
    //     tabBarIcon: ({ color }) => (
    //       <MaterialCommunityIcons name="note" color={color} size={26} />
    //     ),
    //   }} />
    // </Tab.Navigator>
    // <Tabs tabBar={props => <BottomTab {...props} />}>

    //   <Tabs.Screen name="ShootScreen" options={{ title: "Shoot" }} />
    //   <Tabs.Screen name="OrderScreen" options={{ title: "Order" }} />
    //   <Tabs.Screen name="GuideAdd" options={{ title: "Guide" }} />
    //   <Tabs.Screen name="ProfileScreen" options={{ title: "Profile" }} />

    // </Tabs>
//   );
// };

<Tab.Navigator activeColor="#FF4A22"
  activeIndicatorStyle={{ backgroundColor: '#020202' }}
  inactiveColor="#ffffff"
  // screenOptions={{
  //   tabBarStyle: { position: 'absolute' },
  // }}

  // shifting={true}
  barStyle={{

    backgroundColor: '#020202',
    position: 'absolute',
   bottom: 5,
    paddingVertical: 5,
    marginHorizontal: 5,
    borderColor: '#FF4A22',
    borderWidth: 2,
    borderRadius: 10,
    paddingRight: 42,
    borderTopRightRadius: 130,
    borderTopLeftRadius: 130,
    paddingLeft: 42,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    transform: [{ scaleY: .8 }],


  }}
>

  <Tab.Screen name="Shoot" component={ShootScreen}
    options={{
      title: 'Shoot',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="camera-outline" color={color} size={26} />
      ),

    }} />
  <Tab.Screen name="Order" component={OrderScreen}

    options={{
      // tabBarBadge: true,
      tabBarLabel: 'Order',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="note-outline" color={color} size={26} />
      ),
    }} />
  <Tab.Screen name="Guide" component={GuideAdd}
    options={{

      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="folder-open-outline" color={color} size={26} />
      ),
    }} />
  <Tab.Screen name="Profile" component={ProfileScreen}
    options={{
      tabBarLabel: 'Profile',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="account-outline" color={color} size={26} />
      ),
    }} />
</Tab.Navigator>

  ) }

const styles = StyleSheet.create({})