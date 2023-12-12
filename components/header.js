import { View, Text, Image, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import { ChevronDownIcon } from "react-native-heroicons/solid";
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BlockOfFlatsBottomSheet } from '../screens/MenuScreen';

const Header = () => {
  const BlockOfFlatsBottomSheetContext = useContext(BlockOfFlatsBottomSheet);

  const [username, setUsername] = useState("");

  const fetchUsername = () => {
    AsyncStorage.getItem('user').then(u => {
      const user = JSON.parse(u);
      setUsername(user.user.username);
    })
  }

  useEffect(() => {
    fetchUsername();
  }, [])


  return (
    <SafeAreaView className="m-2">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">

      </View>
      <View>
        <Text className="font-bold text-gray-400 text-xs">Καλώς όρισες, {username}</Text>
        <Text className="font-bold text-xl">[πολυκατοικία]
          <TouchableOpacity onPress={BlockOfFlatsBottomSheetContext}>
            <ChevronDownIcon color="#fd5602" />
          </TouchableOpacity>
        </Text>
      </View>


    </SafeAreaView>
  )
}

export default Header