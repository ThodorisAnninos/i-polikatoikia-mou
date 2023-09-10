import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

export default function CardTitle({title, shortDescription, screen}) {
  const navigation = useNavigation();

  handlePress = ()=>{
        navigation.navigate(screen);
    }

  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <TouchableOpacity onPress={handlePress}>
                <ArrowRightIcon color="#fd5602"/>
            </TouchableOpacity>
        </View>
      <Text className="text-xs text-gray-500 px-4 mb-3">{shortDescription}</Text>
    </View>
  )
}