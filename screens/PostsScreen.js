import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, SafeAreaView, ScrollView, FlatList } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LogoScreen from './LogoScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from '../components/header';
import RequestsRow from '../components/requestsRow';
import PostsRow from '../components/postsRow';
import PostCard from '../components/postCard';



// import React from 'react';

export default function PostsScreen() {
  return (
    <SafeAreaView className="mb-28">
      {/* <Header /> */}
      <Text className="text-2xl font-bold p-3">Ανακοινώσεις</Text>
      
      {/* 
      TODO
      <FlatList /> */}


      <ScrollView>
      <PostCard title="post1" category="category1" date="1/1/2000" description="Αυτή είναι μία μεγάλη περιγραφή!" full/>

      </ScrollView>

    </SafeAreaView>
  );
}