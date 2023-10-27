import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import LogoScreen from './LogoScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from '../components/header';
import RequestsRow from '../components/requestsRow';
import PostsRow from '../components/postsRow';
import RequestCard from '../components/requestCard';
import { PlusIcon } from "react-native-heroicons/outline";



// import React from 'react';

export default function RequestsScreen() {

  const navigation = useNavigation();

  const openAddPostDialog = () => {
    navigation.push("AddRequest");
  }


  return (
    <SafeAreaView className="mb-28 flex-1">
      {/* <Header /> */}
      {/* <Text className="text-2xl font-bold p-3">Αιτήματα</Text> */}
      
      {/* 
      TODO
      <FlatList /> */}

      <View className="flex-row p-3">
        <Text className="text-2xl font-bold flex-1">Αιτήματα</Text>
        <TouchableOpacity onPress={openAddPostDialog}>
          <PlusIcon color="#fd5602" size={30}/>
        </TouchableOpacity>
      </View>


      <ScrollView>
        <RequestCard imagePath="null" title="request1" username="user1" category="category1" description="Αυτή είναι μία μεγάλη περιγραφή! Ελπίζω ότι λειτουργεί το number of lines property για να γίνει όμορφο σε όλες τις συσκευές!"full/>
      </ScrollView>

    </SafeAreaView>
  );
}