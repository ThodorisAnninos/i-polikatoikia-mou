import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useLayoutEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-web';

// import React from 'react'

export default function LogoScreen() {
  const navigation = useNavigation();

  useLayoutEffect(()=> {
    setTimeout( () =>  navigation.replace('Menu'), 3000)
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-orange">
      <Image 
        source={require('../images/i-polikatoikia-mou-white.png')}
        className="w-60 h-40"
        // style={{width: 40, height: 40}}
        />
      <Text className="m-10 text-lg text-white font-bold">Εκκίνηση...</Text>
    </View>
  )
}