import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { UserIcon, ListBulletIcon, PencilIcon, TrashIcon, XMarkIcon, CalendarDaysIcon, EyeIcon } from "react-native-heroicons/outline";
import { useNavigation, useRoute } from '@react-navigation/native';
import { getFormattedDate } from '../utils';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const config = require('../config.json');

export default function SinglePostScreen() {
  const navigation = useNavigation();

  const route = useRoute();
  const { id, title, date, category, description, author, viewed } = route.params;

  const closeModal = () => {
    navigation.pop();
  }

  const deletePost = async () => {
    try {
      let token;
      await AsyncStorage.getItem("token").then(t => {
        token = t;
      });
      const response = await axios.delete(config.server_url + "/post/delete/" + id, {
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
        <Text className="text-2xl font-bold flex-1 mt-1">Ανακοίνωση: {title}</Text>

        <View className="flex-row mt-1">
          <TouchableOpacity className="mt-1">
            <PencilIcon color="#fd5602" size={23} />
          </TouchableOpacity>
          <TouchableOpacity className="mt-1 ml-4">
            <TrashIcon color="#fd5602" size={23} onPress={deletePost} />
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
            <Text className="ml-2">{author}</Text>
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
            <EyeIcon color="#fd5602" size={20} />
            <Text className="ml-2">{viewed.length}</Text>
          </View>
        </View>

        <View className="mb-4">
          <Text className="font-bold text-lg mb-1">Περιγραφή</Text>
          <Text>{description}</Text>
        </View>



        <View className="mb-4">
          <View className="flex-row">
            <EyeIcon color="#fd5602" />
            <Text className="font-bold text-lg mb-1 ml-3">Προβλήθηκε από:</Text>
          </View>
          <Text>[profile tabs]</Text>
        </View>
      </ScrollView>
    </View>
  )
}