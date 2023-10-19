import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
// import {AsyncStorage} from 'react-native';

export default function LoginScreen() {

  const navigation = useNavigation();

  const goToRegisterScreen = () => {
    navigation.replace('Register');
  }

  const actionsAfterLogin = (response) => {
    navigation.replace('Menu');
    // AsyncStorage.setItem('token', response.token);
  }

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

    <>


      <StatusBar style="light" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <ScrollView className="bg-orange">
      <SafeAreaView className="flex-1 items-center bg-orange">


        <Image
          className="mt-10"
          source={require('../images/i-polikatoikia-mou-white.png')}
          style={{ width: 150, height: 100, resizeMode: 'cover' }}
        />

        <Text className="m-5 mt-14 font-bold text-white text-2xl">Καλώς Όρισες!</Text>


  
  
        <Formik
          onSubmit={handleLogin}
          initialValues={initialValuesLogin}
          validationSchema={loginSchema}
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
                className="bg-white p-2 w-11/12 rounded m-2"
                placeholder="Όνομα χρήστη"
                onBlur={handleBlur('username')}
                onChangeText={handleChange('username')}
                value={values.username}
                error={Boolean(touched.username) && Boolean(errors.username)}
                helperText={touched.username && errors.username}
                autoCapitalize="none"
                autoCorrect={false}
              />

              <TextInput
                className="bg-white p-2 w-11/12 rounded m-2"
                placeholder="Κωδικός Πρόσβασης"
                secureTextEntry={true}
                onBlur={handleBlur('password')}
                onChangeText={handleChange('password')}
                value={values.password}
                error={Boolean(touched.password) && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />


              <TouchableOpacity className="bg-white rounded p-2 mt-5 w-11/12" onPress={handleSubmit}>
                <Text className="text-center font-bold text-lg">Σύνδεση </Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>



        <TouchableOpacity className="mt-10" onPress={goToRegisterScreen}>
          <Text className="text-white">Δεν έχεις λογαριασμό; Κάνε εγγραφή κάνοντας κλικ εδώ!</Text>
        </TouchableOpacity>


      </SafeAreaView>
      </ScrollView>
    </TouchableWithoutFeedback>
    
    </>

  );
  
}
