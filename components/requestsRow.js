import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import RequestCard from './requestCard'
import CardTitle from './cardTitle'

export default function RequestsRow() {
  return (
    <View>
        <CardTitle title="Αιτήματα" shortDescription="Δείτε όλα σας τα αιτήματα." screen="Requests"/>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <RequestCard imagePath="null" title="request1" username="user1" category="category1" description="Αυτή είναι μια μεγάλη περιγραφή!"/>
            <RequestCard imagePath="null" title="request2" username="user2" category="category2" description="description2"/>
            <RequestCard imagePath="null" title="request3" username="user3" category="category3" description="description3"/>
        </ScrollView>
    </View>
  )
}