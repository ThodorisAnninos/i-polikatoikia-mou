import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import PostCard from './postCard';
import CardTitle from './cardTitle'

export default function PostsRow() {
  return (
    <View>
        <CardTitle title="Ανακοινώσεις" shortDescription="Δείτε όλες τις ανακοινώσεις." screen="Posts"/>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PostCard title="post1" category="category1" date="1/1/2000" description="Αυτή είναι μία πολλή μεγάλη περιγραφή! Ελπίζω ότι λειτουργεί το number of lines property για να γίνει όμορφο σε όλες τις συσκευές!"/>
            <PostCard title="post2" category="category2" date="1/1/2000" description="description2"/>
            <PostCard title="post3" category="category3" date="1/1/2000" description="description3"/>
        </ScrollView>
    </View>
  )
}