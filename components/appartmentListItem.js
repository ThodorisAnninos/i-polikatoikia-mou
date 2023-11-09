import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { XMarkIcon } from "react-native-heroicons/outline";


export default function AppartmentListItem({label, floor, renter, removeAppartment}) {
  return (
    <View className="flex flex-row mb-1">
        <View className="flex-1">
            <Text className="font-semibold">{label}</Text>
            <Text>{floor}ος όροφος | {renter ? "Ενοικιαζόμενο":"Μη ενοικιαζόμενο"}</Text>
      </View>
      <TouchableOpacity onPress={()=>{removeAppartment(label)}}>
        <XMarkIcon color="#fd5602" size={25} />
      </TouchableOpacity>

    </View>

  )
}