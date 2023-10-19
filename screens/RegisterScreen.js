import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { useMemo, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import RadioGroup from 'react-native-radio-buttons-group';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';




export default function RegisterScreen() {

  const navigation = useNavigation();

  const goToLoginScreen = () => {
    navigation.replace('Login');
  }

  const radioButtons = useMemo(() => ([
    {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Ενοικιαστής',
        value: 'renter',
        borderColor:'white',
        color:'white',
        labelStyle:{color:'white'}
    },
    {
        id: '2',
        label: 'Ιδιοκτήτης',
        value: 'owner',
        borderColor:'white',
        color:'white',
        labelStyle:{color:'white'}
    },
    {
        id: '3',
        label: 'Διαχειριστής',
        value: 'admin',
        borderColor:'white',
        color:'white',
        labelStyle:{color:'white'}
    }
]), []);

const [selectedId, setSelectedId] = useState();
  
  return (<>
    {/* <StatusBar style="light"  /> */}
    
    <ScrollView className="bg-orange">
    <KeyboardAwareScrollView extraHeight={120}>

    <SafeAreaView className="flex-1 items-center mb-10" >

    <Image
      className="mt-10" 
        source={require('../images/i-polikatoikia-mou-white.png')}
        style={{width:150, height:100, resizeMode: 'cover'}}
        // style={{width: 40, height: 40}}
        />

      <Text className=" mt-14 font-bold text-white text-2xl">Εγγραφή</Text>
      <Text className="mt-5 mb-5 font-bold text-white ">Γίνε κι εσύ μέλος δημιουργώντας έναν λογαριασμό! Ακολουθήσε τα παρακάτω απλά βήματα!</Text>

      {/* <Text>Κάνε σύνδεση τώρα!</Text> */}

      <TextInput
        className="bg-white p-2 w-11/12 rounded m-2"
        placeholder="Όνομα"
      />

      <TextInput
        className="bg-white p-2 w-11/12 rounded m-2"
        placeholder="Επώνυμο"
      />
      
      <TextInput
        className="bg-white p-2 w-11/12 rounded m-2"
        placeholder="Όνομα χρήστη"
      />

      <TextInput
        className="bg-white p-2 w-11/12 rounded m-2"
        placeholder="Διεύθυνση ηλεκτρονικού ταχυδρομείου"
      />


      <TextInput
        className="bg-white p-2 w-11/12 rounded m-2"
        placeholder="Κωδικός Πρόσβασης"
        secureTextEntry={true} 
      />
      
      <TextInput
        className="bg-white p-2 w-11/12 rounded m-2"
        placeholder="Επιβεβαίωση κωδικού πρόσβασης"
        secureTextEntry={true} 
      />

      {/* <View className="w-11/12">
        <Text className="text-white text-lg font-semibold">Ρόλος</Text>
        <RadioGroup 
              radioButtons={radioButtons} 
              onPress={setSelectedId}
              selectedId={selectedId}
              layout="col"
              containerStyle={{alignItems: 'left',}}
          />
        </View> */}

      <TouchableOpacity className="bg-white rounded p-2 mt-5 w-11/12" >
        <Text className="text-center font-bold text-lg">Επόμενο </Text>
      </TouchableOpacity>

      <TouchableOpacity className="mt-10" onPress={goToLoginScreen}>
      <Text className="text-white">Έχεις ήδη λογαριασμό; Κάνε σύνδεση κάνοντας κλικ εδώ!</Text>
      </TouchableOpacity>
 
    </SafeAreaView>
    </KeyboardAwareScrollView>

    </ScrollView>
    </>
  )
}