import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import HomeScreen from './HomeScreen';
import RequestsScreen from './RequestsScreen';
import PostsScreen from './PostsScreen';
import MyProfileScreen from './MyProfileScreen';

export default function MenuScreen() {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, tabBarLabel: "Αρχική" }}/>
        <Tab.Screen name="Requests" component={RequestsScreen} options={{ headerShown: false, tabBarLabel: "Αιτήματα" }}/>
        <Tab.Screen name="Posts" component={PostsScreen} options={{ headerShown: false, tabBarLabel: "Ανακοινώσεις" }}/>
        <Tab.Screen name="MyProfile" component={MyProfileScreen} options={{ headerShown: false, tabBarLabel: "Προφίλ" }}/>
    </Tab.Navigator>
  )
}