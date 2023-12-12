import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, SafeAreaView, ScrollView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import LogoScreen from './LogoScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from '../components/header';
import RequestsRow from '../components/requestsRow';
import PostsRow from '../components/postsRow';
import PostCard from '../components/postCard';
import { PlusIcon } from "react-native-heroicons/outline";
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const config = require("../config.json");



// import React from 'react';

export default function PostsScreen() {

  const [isLoading, setLoading] = useState(true);
  const[refreshing, setRefreshing] = useState(false);
  const [postsData, setPostsData] = useState([]);

  const navigation = useNavigation();

  const openAddPostDialog = () => {
    navigation.push("AddPost");
  }

  useEffect(() => {
    fetchPostsData();
    setTimeout(()=>setLoading(false), 2000);
    // setLoading(false);
  }, []);

  const fetchPostsData = async () => {
    try {
      let token;
      await AsyncStorage.getItem("token").then(( t ) => {
        token = t;
      });

      const response = await axios.get(config.server_url + "/post/all", {
        headers: {
          "Authorization" : "Bearer " + token
        }
      })

      setPostsData(response.data);

      console.log(response.data);

    } catch (error) {
      console.log(error.response.data.error);
    }
  }

  return (
    <SafeAreaView className="flex-1">
      {/* <Header /> */}
      
      {/* <Text className="text-2xl font-bold p-3">Ανακοινώσεις</Text> */}
      

      <View className="flex-row p-3">
        <Text className="text-2xl font-bold flex-1">Ανακοινώσεις</Text>
        <TouchableOpacity onPress={openAddPostDialog}>
          <PlusIcon color="#fd5602" size={30}/>
        </TouchableOpacity>
      </View>


      {/* <ScrollView>
        <PostCard title="post1" category="category1" date="1/1/2000" description="Αυτή είναι μία μεγάλη περιγραφή! Ελπίζω ότι λειτουργεί το number of lines property για να γίνει όμορφο σε όλες τις συσκευές!" full/>
      </ScrollView> */}

     
      {isLoading ? (<ActivityIndicator size="large"/>) :
    (
      
      <FlatList
        data={postsData}
        renderItem={({item}) => (
          <PostCard id={item._id} title={item.title} category={item.category} date={item.createdAt} description={item.description} author={item.authorId.username} viewed={item.viewed} full/>
        )}
        keyExtractor={item => item._id}
        refreshing={refreshing}
        onRefresh={fetchPostsData}
        />
    )}

    </SafeAreaView>
  );
}