import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { ChevronDownIcon } from "react-native-heroicons/solid";
import React from 'react'

const Header = () => {
  return (
    <SafeAreaView className="m-2">
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
            
        </View>
        <View>
            <Text className="font-bold text-gray-400 text-xs">Καλώς όρισες, [username]</Text>
            <Text className="font-bold text-xl">[πολυκατοικία]
            <TouchableOpacity>
                <ChevronDownIcon color="#fd5602"/>
              </TouchableOpacity>
            </Text>
        </View>

    </SafeAreaView>
  )
}

export default Header