import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, SafeAreaView, ScrollView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import LogoScreen from './LogoScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from '../components/header';
import RequestsRow from '../components/requestsRow';
import PostsRow from '../components/postsRow';
import RequestCard from '../components/requestCard';
import { PlusIcon } from "react-native-heroicons/outline";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { token } from 'morgan';
import { useEffect, useState } from 'react';

const config = require("../config.json");



// import React from 'react';

export default function RequestsScreen() {

  const navigation = useNavigation();

  const route = useRoute();

  const [isLoading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [requestsData, setRequestsData] = useState([]);

  const openAddPostDialog = () => {
    navigation.push("AddRequest");
  }

  useEffect(() => {
    fetchRequestsData();
    setTimeout(() => setLoading(false), 2000);
    // setLoading(false);
  }, []);


  const fetchRequestsData = async () => {
    try {
      let token;
      await AsyncStorage.getItem("token").then((t) => {
        token = t;
      });

      const response = await axios.get(config.server_url + "/request/all", {
        headers: {
          "Authorization": "Bearer " + token
        }
      })

      setRequestsData(response.data);

      console.log(response.data);

    } catch (error) {
      console.log(error.response.data.error);
    }
  }


  return (
    <SafeAreaView className="flex-1">
      {/* <Header /> */}
      {/* <Text className="text-2xl font-bold p-3">Αιτήματα</Text> */}


      <View className="flex-row p-3">
        <Text className="text-2xl font-bold flex-1">Αιτήματα</Text>
        <TouchableOpacity onPress={openAddPostDialog}>
          <PlusIcon color="#fd5602" size={30} />
        </TouchableOpacity>
      </View>


      {/* <ScrollView>
        <RequestCard imagePath="null" title="request1" username="user1" category="category1" description="Αυτή είναι μία μεγάλη περιγραφή! Ελπίζω ότι λειτουργεί το number of lines property για να γίνει όμορφο σε όλες τις συσκευές!"full/>
      </ScrollView> */}

      {isLoading ? (<ActivityIndicator size="large" />) :
        (
          <FlatList
            data={requestsData}
            renderItem={({ item }) => (
              <RequestCard id={item._id} imagePath="null" title={item.title} username={item.userId.username} category={item.category} description={item.description} comments={item.comments} likes={item.likes} location={item.location} progress={item.progress} receiver={item.receiver?.username} date={item.createdAt} full />
            )}
            keyExtractor={item => item._id}
            refreshing={refreshing}
            onRefresh={fetchRequestsData}
          />
        )}
    </SafeAreaView>
  );
}