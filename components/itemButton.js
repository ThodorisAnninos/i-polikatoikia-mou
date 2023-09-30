import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ItemButton() {
  return (
    <TouchableOpacity className="border p-4 rounded-lg w-1/2">
      <Text className="font-semibold">ItemButton</Text>
    </TouchableOpacity>
  )
}