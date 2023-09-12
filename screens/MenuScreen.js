import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import HomeScreen from './HomeScreen';
import RequestsScreen from './RequestsScreen';
import PostsScreen from './PostsScreen';
import MyProfileScreen from './MyProfileScreen';
import { UserIcon, HomeIcon, MegaphoneIcon, FolderIcon} from "react-native-heroicons/outline";
import { UserIcon as UperIconSolid, HomeIcon as HomeIconSolid, MegaphoneIcon as MegaphoneIconSolid, FolderIcon as FolderIconSolid} from "react-native-heroicons/solid";




export default function MenuScreen() {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, tabBarLabel: "Αρχική", tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <HomeIconSolid color="#fd5602" size={size} />
            ) : (
              <HomeIcon color="#fd5602" size={size} />
            ),
            tabBarLabelStyle: {
              color: '#fd5602', // Change the label color
            }
        }}
      />
        <Tab.Screen name="Requests" component={RequestsScreen} options={{ headerShown: false, tabBarLabel: "Αιτήματα", tabBarIcon: ({ focused, color, size }) => focused ? (
              <FolderIconSolid color="#fd5602" size={size} />
            ) : (
              <FolderIcon color="#fd5602" size={size} />
            ),
            tabBarLabelStyle: {
              color: '#fd5602', // Change the label color
            }
        }} />
        <Tab.Screen name="Posts" component={PostsScreen} options={{ headerShown: false, tabBarLabel: "Ανακοινώσεις", tabBarIcon: ({ focused, color, size }) =>focused ? (
              <MegaphoneIconSolid color="#fd5602" size={size} />
            ) : (
              <MegaphoneIcon color="#fd5602" size={size} />
            ),
            tabBarLabelStyle: {
              color: '#fd5602', // Change the label color
            }
        }}/>
        <Tab.Screen name="MyProfile" component={MyProfileScreen} options={{ headerShown: false, tabBarLabel: "Προφίλ", tabBarIcon: ({ focused, color, size }) => focused ? (
              <UperIconSolid color="#fd5602" size={size} />
            ) : (
              <UserIcon color="#fd5602" size={size} />
            ),
            tabBarLabelStyle: {
              color: '#fd5602', // Change the label color
            }
        }}/>
    </Tab.Navigator>
  )
}