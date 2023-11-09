import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { MagnifyingGlassIcon, ChevronRightIcon} from "react-native-heroicons/outline";
import { Formik } from 'formik';
import { ScrollView } from 'react-native-gesture-handler';
import  MapView, { Marker }  from 'react-native-maps';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function FindBlockOfFlatsScreen() {

  const [blockOfFlat, setBlockOfFlat] = useState(null);


  const initialValueBlockOfFlatID = {
    blockOfFlatsID: ''
  };

  const searchBlockOfFlat = async(values) => {
    console.log(values.blockOfFlatsID);
    setBlockOfFlat({})
  }


  return (
    // <KeyboardAvoidingView
    // behavior={Platform.OS ==="ios" ?  "padding": "height"}
    // className="flex-1"
    // keyboardVerticalOffset={10}
    // >

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>


      
      <KeyboardAwareScrollView className="flex-1  bg-white p-7" extraHeight={120}>
        <SafeAreaView>
            <Image 
            source={require('../images/i-polikatoikia-mou-orange.png')}
            style={{width:150, height:100, resizeMode: 'cover'}}
            className="mt-2"
            />
          <Text className="mt-8 font-bold text-orange-600 text-2xl">Βρες την πολυκατοικία σου!</Text>
          <Text className="mt-8">Πληκτρολόγησε το μοναδικό αναγνωριστικό (ID) της πολυκατοικίας σου για να την εντοπίσεις!</Text>

          <View className="flex-row items-center pr-4">
            <Formik
            onSubmit={searchBlockOfFlat}
            initialValues={initialValueBlockOfFlatID}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm
              }) => (
                <>
                  <TextInput 
                  className="p-2 rounded mr-2 mt-6 text-lg bg-gray-100 pb-5 flex-1"
                  placeholder="Αναγνωριστικό πολυκατοικίας..."
                  onBlur={handleBlur('blockOfFlatsID')}
                  onChangeText={handleChange('blockOfFlatsID')}
                  value={values.blockOfFlatsID}
                  error={Boolean(touched.blockOfFlatsID) && Boolean(errors.blockOfFlatsID)}
                  helperText={touched.blockOfFlatsID && errors.blockOfFlatsID}
                  clearButtonMode='while-editing'
                  />
                  <TouchableOpacity className="mt-4 " onPress={handleSubmit}>
                    <MagnifyingGlassIcon color="#fd5602"/>
                  </TouchableOpacity>
                </>
              )}

            </Formik>
          </View>


          {blockOfFlat && (
          <View className="mt-10 bg-gray-200 rounded p-3" >
              <MapView style={{width:"100%", height:200}}
              initialRegion={{
                latitude: 40.58508, // Update with your marker's latitude
                longitude: 23.02170, // Update with your marker's longitude
                latitudeDelta: 0.01, // Adjust the zoom level as needed
                longitudeDelta: 0.01, // Adjust the zoom level as needed
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
            <TouchableOpacity>

       
              {/* <Map/> */}
              <View className="flex-row items-center mt-2">
                <View className="flex-1">
                  <Text className="font-bold text-lg mb-1">Πολυκατοικία #</Text>
                  <Text>[δρόμος] [αριθμός], [πόλη]</Text>
                  <Text>[ΤΚ]</Text>
                </View>
                <ChevronRightIcon color="#fd5602"/>
            </View>

            </TouchableOpacity>
          </View>
          )}
        </SafeAreaView>
      </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
  )
}