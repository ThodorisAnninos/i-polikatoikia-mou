import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import LogoScreen from './LogoScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from '../components/header';
import RequestsRow from '../components/requestsRow';
import PostsRow from '../components/postsRow';
import PostCard from '../components/postCard';
import { PlusIcon } from "react-native-heroicons/outline";




// import React from 'react';

export default function PostsScreen() {

  const navigation = useNavigation();

  const openAddPostDialog = () => {
    navigation.push("AddPost");
  }

  return (
    <SafeAreaView className="mb-28 flex-1">
      {/* <Header /> */}
      
      {/* <Text className="text-2xl font-bold p-3">Ανακοινώσεις</Text> */}
      
      {/* 
      TODO
      <FlatList /> */}

      <View className="flex-row p-3">
        <Text className="text-2xl font-bold flex-1">Ανακοινώσεις</Text>
        <TouchableOpacity onPress={openAddPostDialog}>
          <PlusIcon color="#fd5602" size={30}/>
        </TouchableOpacity>
      </View>


      <ScrollView>
      <PostCard title="post1" category="category1" date="1/1/2000" description="Αυτή είναι μία μεγάλη περιγραφή! Ελπίζω ότι λειτουργεί το number of lines property για να γίνει όμορφο σε όλες τις συσκευές!" full/>

      </ScrollView>

    </SafeAreaView>
  );
}