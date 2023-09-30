import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { MagnifyingGlassIcon, ChevronRightIcon} from "react-native-heroicons/outline";
import { Formik } from 'formik';
import { ScrollView } from 'react-native-gesture-handler';
import ItemButton from '../components/itemButton';

export default function FindBlockOfFlatScreen() {

  const [blockOfFlat, setBlockOfFlat] = useState(null);

  const initialValueBlockOfFlatID = {
    blockOfFlatsID: ''
  };

  const searchBlockOfFlat = async(values) => {
    console.log(values.blockOfFlatsID);
    setBlockOfFlat({})
  }

  return (
      
      <View className="flex-1  bg-white p-7">
        <SafeAreaView>
            <Image 
            source={require('../images/i-polikatoikia-mou-orange.png')}
            style={{width:150, height:100, resizeMode: 'cover'}}
            className="mt-2"
            />
          <Text className="mt-8 font-bold text-orange-600 text-2xl">Επίλεξε το διαμέρισμά σου!</Text>
          <Text className="mt-8">Από τα παρακάτω διαμερίσματα επίλεξε αυτό που διαμένεις (είτε ως ιδιοκτήτης, είτε ως ενοικιαστής)</Text>

          {/* <ScrollView>

          </ScrollView> */}
            
            <Text className="mt-5 mb-2 font-bold">Διαμέρισμα</Text>
            <ScrollView>
              {/* <View className="flex flex-row flex-wrap"> */}
              <View className="flex flex-row flex-wrap">
              <ItemButton/>
              <ItemButton/>
              <ItemButton/>
              <ItemButton/>
              </View>
            </ScrollView>

            <Text className="mt-5 mb-2 font-bold">Ρόλος</Text>
            <ScrollView>
              {/* <View className="flex flex-row flex-wrap"> */}
              <View className="flex flex-row flex-wrap">
              <ItemButton/>
              <ItemButton/>
              </View>
            </ScrollView>

          <View className="flex-row items-center pr-4">
            {/* <Formik
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
                  />
                  <TouchableOpacity className="mt-4 " onPress={handleSubmit}>
                    <MagnifyingGlassIcon color="#fd5602"/>
                  </TouchableOpacity>
                </>
              )}

            </Formik> */}
          </View>


          {blockOfFlat && (
          <View className="mt-10 bg-gray-200 rounded p-3" >
            <TouchableOpacity>
              {/* <Map/> */}
              <View className="flex-row items-center">
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
      </View>

  )
}