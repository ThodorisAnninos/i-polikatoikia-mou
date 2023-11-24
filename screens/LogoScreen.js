import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useLayoutEffect } from 'react';
import { Text, View, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import React from 'react'

export default function LogoScreen() {
  const navigation = useNavigation();
  let page = 'Login';

  checkLoggedIn = () => {
    AsyncStorage.getItem('user').then( user =>{
      user = JSON.parse(user);
      if (user){
        page = 'Menu';
      }
    });
  }

  useLayoutEffect(()=> {
    checkLoggedIn();
    setTimeout( () =>  navigation.replace(page), 3000)
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-orange">
      <Image 
        source={require('../images/i-polikatoikia-mou-white.png')}
        className="w-60 h-40"
        // style={{width: 40, height: 40}}
        />
        <ActivityIndicator className="mt-10" color="white"/>
      {/* <Text className="m-10 text-lg text-white font-bold">Εκκίνηση...</Text> */}
    </View>
  )
}