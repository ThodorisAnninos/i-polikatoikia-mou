import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


// import React from 'react';

export default function MyProfileScreen() {
  const navigation = useNavigation();

  handleLogout = () => {
    AsyncStorage.clear();
    navigation.replace("Login");
  }

  return (
    <SafeAreaView className="mb-28">
      {/* <Header /> */}
      <Text className="text-2xl font-bold p-3">Το Προφίλ μου</Text>
      
      {/* 
      TODO
      <FlatList /> */}


      <ScrollView>
      
      <Text>TEMP</Text>
      <TouchableOpacity className="bg-orange p-5 m-3" onPress={handleLogout}>
        <Text className="text-white">Logout</Text>
      </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  );
}