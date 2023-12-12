import { View, Text, ScrollView } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import HomeScreen from './HomeScreen';
import RequestsScreen from './RequestsScreen';
import PostsScreen from './PostsScreen';
import MyProfileScreen from './MyProfileScreen';
import { UserIcon, HomeIcon, MegaphoneIcon, FolderIcon } from "react-native-heroicons/outline";
import { UserIcon as UperIconSolid, HomeIcon as HomeIconSolid, MegaphoneIcon as MegaphoneIconSolid, FolderIcon as FolderIconSolid } from "react-native-heroicons/solid";
import BottomSheet from '@gorhom/bottom-sheet';
import BlockOfFlatsItem from '../components/blockOfFlatsItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BlockOfFlatsBottomSheet = React.createContext();

export default function MenuScreen() {
  const Tab = createBottomTabNavigator();


  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['50%', '85%'], []);

  const [displayBottomSheet, setDisplayBottomSheet] = useState(false);


  const openBottomSheet = () => {
    setDisplayBottomSheet(true)
    bottomSheetRef.current.snapToIndex(0);
  }


  return (
    <>
      <BlockOfFlatsBottomSheet.Provider value={openBottomSheet}>

        <Tab.Navigator>
          <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
            headerShown: false, tabBarLabel: "Αρχική", tabBarIcon: ({ focused, color, size }) =>
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
          <Tab.Screen name="Requests" component={RequestsScreen} options={{
            headerShown: false, tabBarLabel: "Αιτήματα", tabBarIcon: ({ focused, color, size }) => focused ? (
              <FolderIconSolid color="#fd5602" size={size} />
            ) : (
              <FolderIcon color="#fd5602" size={size} />
            ),
            tabBarLabelStyle: {
              color: '#fd5602', // Change the label color
            }
          }} />
          <Tab.Screen name="Posts" component={PostsScreen} options={{
            headerShown: false, tabBarLabel: "Ανακοινώσεις", tabBarIcon: ({ focused, color, size }) => focused ? (
              <MegaphoneIconSolid color="#fd5602" size={size} />
            ) : (
              <MegaphoneIcon color="#fd5602" size={size} />
            ),
            tabBarLabelStyle: {
              color: '#fd5602', // Change the label color
            }
          }} />
          <Tab.Screen name="MyProfile" component={MyProfileScreen} options={{
            headerShown: false, tabBarLabel: "Προφίλ", tabBarIcon: ({ focused, color, size }) => focused ? (
              <UperIconSolid color="#fd5602" size={size} />
            ) : (
              <UserIcon color="#fd5602" size={size} />
            ),
            tabBarLabelStyle: {
              color: '#fd5602', // Change the label color
            }
          }} />
        </Tab.Navigator>

        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          style={{ backgroundColor: "light-grey" }}
          onClose={() => setDisplayBottomSheet(false)}
        >
          <View>
            <Text className="m-3 mt-0 font-bold">Επίλεξε πολυκατοικία:</Text>
            <ScrollView>
              <BlockOfFlatsItem label="Pol1" address={{ road: "roadd", number: 1, postalCode: 12345, city: "cityy", location: { lat: 0, lng: 0 } }} />
              <BlockOfFlatsItem label="Pol2" address={{ road: "roadd", number: 2, postalCode: 12345, city: "cityy", location: { lat: 0, lng: 0 } }} />
              <BlockOfFlatsItem label="Pol2" address={{ road: "roadd", number: 2, postalCode: 12345, city: "cityy", location: { lat: 0, lng: 0 } }} />
              <BlockOfFlatsItem label="Pol2" address={{ road: "roadd", number: 2, postalCode: 12345, city: "cityy", location: { lat: 0, lng: 0 } }} />
            </ScrollView>
          </View>
        </BottomSheet>


      </BlockOfFlatsBottomSheet.Provider>
    </>
  )
}