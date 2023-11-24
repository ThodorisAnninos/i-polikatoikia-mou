import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import  MapView, { Marker }  from 'react-native-maps';
import { ChevronRightIcon} from "react-native-heroicons/outline";



export default function BlockOfFlatsItem({ label, address }) {
  return (
    <TouchableOpacity className="m-3">
        <View className="flex flex-row">
        <MapView style={{width:"30%", height:100}}
              initialRegion={{
                latitude: 40.58508, // Update with your marker's latitude
                longitude: 23.02170, // Update with your marker's longitude
                latitudeDelta: 0.01, // Adjust the zoom level as needed
                longitudeDelta: 0.0001, // Adjust the zoom level as needed
              }}>
              
              <Marker
                  // key={1}
                  coordinate={{
                    latitude: 40.58508,
                    longitude: 23.02170
                  }}
                  title={"Σημείο"}
                  description={"Περιγραφή σημείου"}
                />
            </MapView>
            <View className="flex-1 ml-4 mt-3">
                <Text className="font-bold text-lg mb-1">Πολυκατοικία #</Text>
                <Text>[δρόμος] [αριθμός]</Text>
                <Text>[πόλη] [ΤΚ]</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}