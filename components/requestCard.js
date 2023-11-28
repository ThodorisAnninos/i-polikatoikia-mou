import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {Text, TouchableOpacity, Image, View} from 'react-native'
import { UserIcon, ListBulletIcon } from "react-native-heroicons/outline";

export default function RequestCard({imagePath, title, username, category, full, description}) {
  const navigation = useNavigation();
  
  s="w-64"
  if (full){
    s=""
  }

  const createShortDescription = ()=> {
    if(description.length > 30){
      return `${description.substring(0,30)}...`
    }
    return description;
  }

  const openClickedRequestScreen = () => {
    navigation.navigate("SingleRequest");
  }

  return (
    <TouchableOpacity className={`bg-white mb-5 mr-2 ml-2 shadow rounded-lg ${s}`}
      onPress={openClickedRequestScreen}
    >
        <Image
        source={require('../images/requestsPlaceholder.jpeg')}
        className="w-full h-36 rounded"
        />
        <View className="p-3">
            <Text className="text-lg font-bold mb-2">{title}</Text>
            <View className="flex-row items-center">
                <UserIcon color="#fd5602" size={20} />
                <Text className="ml-2">{username}</Text>
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
