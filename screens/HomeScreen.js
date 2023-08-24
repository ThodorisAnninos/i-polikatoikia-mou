import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LogoScreen from './LogoScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native';
import Header from '../components/header';



// import React from 'react';

export default function HomeScreen() {
  return (
    <Header />
    
  );
}