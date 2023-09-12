import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LogoScreen from './LogoScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from '../components/header';
import RequestsRow from '../components/requestsRow';
import PostsRow from '../components/postsRow';



// import React from 'react';

export default function HomeScreen() {
  return (
    <View className="mb-2 flex-1">
      <Header />
      <ScrollView>

        
        <PostsRow/>
        <RequestsRow/>
        {/* <RequestsRow/> */}
        
      </ScrollView>
    </View>
  );
}