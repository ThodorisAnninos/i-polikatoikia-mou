import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { CheckIcon } from "react-native-heroicons/outline";
import { Formik } from 'formik';
import  MapView, { Marker }  from 'react-native-maps';
import { KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as yup from 'yup';
import AppartmentListItem from '../components/appartmentListItem';
import Checkbox from 'expo-checkbox';


export default function AddAppartementsScreen() {
  const [isRented, setRented] = useState(false);

  const [appartments, setAppartments] = useState([]);

  const addAppartment = (appartment) => {
    setAppartments([...appartments, appartment]);
  };

  const removeAppartment = (label) => {
    setAppartments(appartments.filter((a) => a.label !== label));
  };


  

  const appartmentSchema = yup.object().shape({
    label: yup.string().required('Υποχρεωτικό πεδίο'),
    floor: yup.number().required('Υποχρεωτικό πεδίο'),
    rented: yup.bool(),
  });

  const initialValuesLogin = {
    label: '',
    floor: '',
    rented: false,
  };

  const handleNewAppartment =  (values) => {
    console.log(values.label);
    console.log(values.floor);
    console.log(isRented);

    addAppartment({
      label: values.label,
      floor: values.floor,
      rented: isRented
    });

    values.label= '';
    values.floor= '';
    setRented(false);

    // console.log(appartments);

  };




  return (
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* <SafeAreaView className="flex-1 bg-white"> */}
        <KeyboardAwareScrollView className="flex-1 p-7" extraHeight={120}>
            <Image 
            source={require('../images/i-polikatoikia-mou-orange.png')}
            style={{width:150, height:100, resizeMode: 'cover'}}
            className="mt-2"
            />


          <Text className="mt-8 font-bold text-orange-600 text-2xl">Πρόσθεσε τα διαμερίσματα!</Text>
          <Text className="mt-8">Πρόσθεσε ένα ένα τα διαμερίσματα της πολυκατοικίας!</Text>

          <Text className="font-bold mb-3 mt-5">Δημιουργία διαμερισμάτων</Text>
          <View className="pr-4">
            <Formik
            onSubmit={handleNewAppartment}
            initialValues={initialValuesLogin}
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


              <View className="flex flex-row">
                <TextInput
                    className="bg-white p-2 rounded border w-8/12"
                    placeholder="Ονομασία διαμερίσματος"
                    onBlur={handleBlur('label')}
                    onChangeText={handleChange('label')}
                    value={values.label}
                    error={Boolean(touched.label) && Boolean(errors.label)}
                    helperText={touched.label && errors.label}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TextInput
                    className="bg-white p-2 rounded border w-4/12"
                    placeholder="Όροφος"
                    onBlur={handleBlur('floor')}
                    onChangeText={handleChange('floor')}
                    value={values.floor}
                    error={Boolean(touched.floor) && Boolean(errors.floor)}
                    helperText={touched.floor && errors.floor}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType='numeric'
                />
              </View>
                

                <View className="flex flex-row mt-2">
                  <View className="flex flex-row flex-1">
                    <Checkbox
                      value={isRented}
                      onValueChange={()=>{
                        setRented(!isRented);
                      }}
                      color={isRented ? '#fd5602' : undefined}
                    />
                    <Text className="ml-2 mt-0.5">Ενοικιαζόμενο</Text>
                  </View>

                  <TouchableOpacity className="rounded flex flex-row" onPress={handleSubmit}>
                      <CheckIcon color="#fd5602"/>
                      <Text className="mt-1 ml-1 text-orange-500">Προσθήκη</Text>
                  </TouchableOpacity>
                </View>
                </>
              )}

            </Formik>
          </View>

          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
            className="mt-5 mb-2"
          />

          <Text className="font-bold mt-3 mb-3">Διαμερίσματα</Text>
          
          <ScrollView className="h-20">
            {(appartments.length>0)?
            (appartments.map((appartment, index)=>{
              return <AppartmentListItem key={index} label={appartment.label} floor={appartment.floor} renter={appartment.rented} removeAppartment={removeAppartment}/>
            })) :
            (<Text className="opacity-40 text-center mt-5">Δε βρέθηκαν διαμερίσματα!</Text>)}
          </ScrollView>




        {/* <TouchableOpacity className="bg-orange rounded  p-2 mt-5 w-full">
            <Text className="text-center text-white font-bold text-lg">Συνέχεια</Text>
        </TouchableOpacity> */}



      </KeyboardAwareScrollView>
{/* 
      <TouchableOpacity className="bg-orange rounded  p-2 m-7">
            <Text className="text-center text-white font-bold text-lg">Συνέχεια</Text>
        </TouchableOpacity>
      </SafeAreaView> */}

      </TouchableWithoutFeedback>
  )
}