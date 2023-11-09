import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { MagnifyingGlassIcon, ChevronRightIcon} from "react-native-heroicons/outline";
import { Formik } from 'formik';
import { ScrollView } from 'react-native-gesture-handler';
import  MapView, { Marker }  from 'react-native-maps';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as yup from 'yup';



export default function AddBlockOfFLatsScreen() {


  const loginSchema = yup.object().shape({
    username: yup.string().required('Υποχρεωτικό πεδίο'),
    password: yup.string().required('Υποχρεωτικό πεδίο'),
  });

  const initialValuesLogin = {
    username: '',
    password: '',
  };

  const handleLogin = async (values) => {
    console.log(values.username);
    console.log(values.password);

    try {
      const response = await axios.post('http://localhost:3001/auth/login', {
        username: values.username,
        password: values.password,
      });

      // Handle a successful login response here (e.g., store user data, navigate to another screen).
      console.log('Login successful:', response.data);
      actionsAfterLogin(response);

    } catch (error) {
      // Handle login error (e.g., display an error message to the user).
      console.error('Login failed:',  error);
    }
  };


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
          <Text className="mt-8 font-bold text-orange-600 text-2xl">Δημιούργησε την πολυκατοικία σου!</Text>
          <Text className="mt-8">Συμπλήρωσε τα παρακάτω πεδία και λάβε το μοναδικό αναγνωριστικό (ID) της πολυκατοικίας σου ώστε να την εντοπίζουν οι χρήστες που ανήκουν σε αυτήν!</Text>

          <View>
            <Formik
            onSubmit={handleLogin}
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
                <Text className="font-bold mb-1 mt-3 mb-3">Τοποθεσία</Text>

                <View className="flex-row">
                <TextInput
                    className="bg-white p-2 rounded border w-9/12"
                    placeholder="Δρόμος"
                    onBlur={handleBlur('username')}
                    onChangeText={handleChange('username')}
                    value={values.username}
                    error={Boolean(touched.username) && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TextInput
                    className="bg-white p-2 rounded border w-3/12"
                    placeholder="Αριθμός"
                    onBlur={handleBlur('username')}
                    onChangeText={handleChange('username')}
                    value={values.username}
                    error={Boolean(touched.username) && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType='numeric'
                />
                </View>

                <View className="flex flex-row mt-2">
                <TextInput
                    className="bg-white p-2 rounded border w-7/12"
                    placeholder="Πόλη"
                    onBlur={handleBlur('username')}
                    onChangeText={handleChange('username')}
                    value={values.username}
                    error={Boolean(touched.username) && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TextInput
                    className="bg-white p-2 rounded border w-5/12"
                    placeholder="ΤΚ"
                    onBlur={handleBlur('username')}
                    onChangeText={handleChange('username')}
                    value={values.username}
                    error={Boolean(touched.username) && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType='numeric'
                />
                </View>

                <View className="mt-2 rounded">
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
                </View>

                <TouchableOpacity className="bg-orange rounded p-2 mt-5 w-full" onPress={handleSubmit}>
                    <Text className="text-center text-white font-bold text-lg">Συνέχεια</Text>
                </TouchableOpacity>
                </>
              )}

            </Formik>
          </View>



        </SafeAreaView>
      </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
  )
}