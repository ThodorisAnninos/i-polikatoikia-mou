import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, SafeAreaView, ScrollView, FlatList } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LogoScreen from './LogoScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from '../components/header';
import RequestsRow from '../components/requestsRow';
import PostsRow from '../components/postsRow';
import RequestCard from '../components/requestCard';



// import React from 'react';

export default function RequestsScreen() {
  return (
    <SafeAreaView className="mb-28 flex-1">
      {/* <Header /> */}
      <Text className="text-2xl font-bold p-3">Αιτήματα</Text>
      
      {/* 
      TODO
      <FlatList /> */}


      <ScrollView>
        <RequestCard imagePath="null" title="request1" username="user1" category="category1" description="description1"full/>
      </ScrollView>

    </SafeAreaView>
  );
}