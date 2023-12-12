import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { UserIcon, ListBulletIcon, PencilIcon, TrashIcon, XMarkIcon, MapPinIcon, ArrowRightIcon, ChatBubbleLeftRightIcon, CalendarDaysIcon, HandThumbUpIcon, HandThumbDownIcon } from "react-native-heroicons/outline";
import { useNavigation, useRoute } from '@react-navigation/native';
import { getFormattedDate } from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const config = require('../config.json');

export default function SingleRequestScreen() {
  const navigation = useNavigation();

  const route = useRoute();
  const { id, imagePath, title, username, category, description, comments, likes, location, progress, receiver, date } = route.params;

  const closeModal = () => {
    navigation.pop();
  }

  const deleteRequest = async () => {
    try {
      let token;
      await AsyncStorage.getItem("token").then(t => {
        token = t;
      });
      const response = await axios.delete(config.server_url + "/request/delete/" + id, {
        headers: {
          "Authorization": "Bearer " + token
        }
      })


      console.log(response.data.success);
      closeModal();

    } catch (error) {
      console.log(error.response.data.error);
    }
  }

  return (
    // <ScrollView className="p-5">
    <View className="p-5 flex-1">
      <View className="flex-row">
        <Text className="text-2xl font-bold flex-1 mt-1">Αίτημα: {title}</Text>

        <View className="flex-row mt-1">
          <TouchableOpacity className="mt-1">
            <PencilIcon color="#fd5602" size={23} />
          </TouchableOpacity>
          <TouchableOpacity className="mt-1 ml-4" onPress={deleteRequest}>
            <TrashIcon color="#fd5602" size={23} />
          </TouchableOpacity>
          <TouchableOpacity className="ml-3" onPress={closeModal}>
            <XMarkIcon color="#fd5602" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View className="mt-4 mb-4 p-2 border-2 rounded border-orange-500">
          <View className="flex-row items-center">
            <UserIcon color="#fd5602" size={20} />
            <Text className="ml-2">{username}</Text>
          </View>
          <View className="flex-row items-center mt-1">
            <ListBulletIcon color="#fd5602" size={20} />
            <Text className="ml-2">{category}</Text>
          </View>
          <View className="flex-row items-center mt-1">
            <CalendarDaysIcon color="#fd5602" size={20} />
            <Text className="ml-2">{getFormattedDate(date)}</Text>
          </View>
          <View className="flex-row items-center mt-1">
            <MapPinIcon color="#fd5602" size={20} />
            <Text className="ml-2">{location}</Text>
          </View>
          <View className="flex-row items-center mt-1">
            <ArrowRightIcon color="#fd5602" size={20} />
            <Text className="ml-2">{receiver}</Text>
          </View>
        </View>

        <View className="mb-4">
          <Text className="font-bold text-lg mb-1">Περιγραφή</Text>
          <Text>{description}</Text>
        </View>

        <View className="mb-4">
          <Text className="font-bold text-lg mb-1">Φωτογραφίες</Text>
          <Text>[images]</Text>
        </View>

        <View className="mb-4">
          <Text className="font-bold text-lg mb-1">Εξέλιξη Αιτήματος</Text>
          <Text>[progress timebar]</Text>
        </View>

        <View className="mb-4 flex-row justify-center">
          <TouchableOpacity className="bg-orange flex-row items-center rounded-lg p-3 pl-5 pr-5 first-letter">
            <HandThumbUpIcon color="white" size={40} />
            <Text className="text-white text-xl pl-3">Σας αρέσει! {likes.length}</Text>
          </TouchableOpacity>
        </View>

        <View className="mb-4">
          <View className="flex-row">
            <ChatBubbleLeftRightIcon color="#fd5602" />
            <Text className="font-bold text-lg mb-1 ml-3">Σχόλια ({comments.length})</Text>
          </View>
          <Text>[comments]</Text>
        </View>
      </ScrollView>
    </View>
  )
}