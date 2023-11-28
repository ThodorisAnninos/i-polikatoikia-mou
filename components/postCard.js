import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {Text, TouchableOpacity, Image, View} from 'react-native'
import { CalendarDaysIcon, ListBulletIcon } from "react-native-heroicons/outline";

export default function PostCard({title, date, category, description, full}) {
  const navigation = useNavigation();
  
  s="w-64"
  if (full){
    s=""
  }

  const openClickedPostScreen = () => {
    navigation.navigate("SinglePost");
  }

  const createShortDescription = ()=> {
    if(description.length > 30){
      return `${description.substring(0,30)}...`
    }
    return description;
  }


  return (
    <TouchableOpacity className={`bg-white mr-2 ml-2 mb-5 shadow ${s} rounded-lg`}
      onPress={openClickedPostScreen}
    >
        <View className="p-3">
            <Text className="text-lg font-bold mb-2">{title}</Text>
            <View className="flex-row items-center">
                <CalendarDaysIcon color="#fd5602" size={20} />
                <Text className="ml-2">{date}</Text>
            </View>
            <View className="flex-row items-center mt-1">
                <ListBulletIcon color="#fd5602" size={20}/>
                <Text className="ml-2">{category}</Text>
            </View>
            {/* <Text className="mt-3">{createShortDescription()}</Text> */}
            <Text numberOfLines={1} className="mt-3">{description}</Text>
        </View>
    </TouchableOpacity>
  )

}
