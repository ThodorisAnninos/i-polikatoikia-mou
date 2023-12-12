import { View, Text, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { UserIcon, ListBulletIcon, XMarkIcon, CalendarDaysIcon, EyeIcon } from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import { Formik } from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function AddRequestScreen() {
  const navigation = useNavigation();

  const [category, setCategory] = useState(null);
  const closeModal = () => {
    navigation.pop();
  }

  const goToRegisterScreen = () => {
    navigation.replace('Register');
  }

  const actionsAfterAddingRequest = (response) => {
    navigation.pop();
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

  const handleAddRequest = async (values) => {
    try {
      let userId;
      await AsyncStorage.getItem("user").then(u => {
        const user = JSON.parse(u);
        userId = user.user._id;
      });

      let token;
      await AsyncStorage.getItem("token").then(t => {
        token = t;
      });

      const response = await axios.post('http://localhost:3001/request/new', {
        title: values.title,
        description: values.description,
        userId: userId,
        blockOfFlatsId: "653a94d86861f1b1205f02b4", // TODO: replace it dynamically.
        category: category,
        location: values.location,
        receiver: null // TODO: replace itttt
      }, {
        headers: {
          "Authorization": "Bearer " + token
        }
      });

      // Handle a successful login response here (e.g., store user data, navigate to another screen).
      console.log('Added Post successful:', response.data);
      actionsAfterAddingRequest(response);

    } catch (error) {
      // Handle login error (e.g., display an error message to the user).
      console.log('Added Post failed:', error);
      Alert.alert(error.response.data.error);
    }
  };

  return (
    // <ScrollView className="p-5">
    <View className="p-5 flex-1">
      <View className="flex-row mb-5">
        <Text className="text-2xl font-bold flex-1 mt-1">Δημιουργία Αιτήματος</Text>

        <View className="flex-row mt-1">
          <TouchableOpacity className="ml-3" onPress={closeModal}>
            <XMarkIcon color="#fd5602" size={30} />
          </TouchableOpacity>
        </View>

      </View>
      <ScrollView>



        <Formik
          onSubmit={handleAddRequest}
          initialValues={initialValuesLogin}
        // validationSchema={loginSchema}
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

              <Text className="font-bold mb-1">Τίτλος</Text>
              <TextInput
                className="bg-white p-2 w-full rounded"
                placeholder="Τίτλος"
                onBlur={handleBlur('title')}
                onChangeText={handleChange('title')}
                value={values.title}
                error={Boolean(touched.title) && Boolean(errors.title)}
                helperText={touched.title && errors.title}
                autoCapitalize="none"
                autoCorrect={false}
              />


              <Text className="font-bold mb-1 mt-3">Κατηγορία</Text>
              <View className="bg-white p-2 w-full rounded">
                <RNPickerSelect
                  placeholder={{
                    label: 'Επίλεξε κατηγορία...'
                  }}
                  onValueChange={(value) => setCategory(value)}
                  items={[
                    { label: 'Cat1', value: 1 },
                    { label: 'Cat2', value: 2 },
                    { label: 'Cat3', value: 3 },
                  ]}
                />
              </View>

              {/* if statement ΜΟΝΟ για ενοικιαζόμενα */}
              <Text className="font-bold mb-1 mt-3">Αποδέκτης</Text>
              <View className="bg-white p-2 w-full rounded">
                <RNPickerSelect
                  placeholder={{
                    label: 'Επίλεξε αποδέκτη...'
                  }}
                  onValueChange={(value) => console.log(value)}
                  items={[
                    { label: 'Κοινόχρηστο', value: 'public' },
                    { label: 'Ιδιοκτήτης', value: 'id' },
                  ]}
                />
              </View>
              {/* end if */}

              <Text className="font-bold mb-1 mt-3">Τοποθεσία</Text>
              <TextInput
                className="bg-white p-2 w-full rounded"
                placeholder="Τοποθεσία"
                onBlur={handleBlur('location')}
                onChangeText={handleChange('location')}
                value={values.location}
                error={Boolean(touched.location) && Boolean(errors.location)}
                helperText={touched.location && errors.location}
                autoCapitalize="none"
                autoCorrect={false}
              />

              <Text className="font-bold mb-1 mt-3">Περιγραφή</Text>
              <TextInput
                multiline={true}
                className="bg-white p-2 w-full rounded"
                placeholder="Περιγραφή"
                onBlur={handleBlur('description')}
                onChangeText={handleChange('description')}
                value={values.description}
                error={Boolean(touched.description) && Boolean(errors.description)}
                helperText={touched.description && errors.description}
                autoCapitalize="none"
                autoCorrect={true}
              />

              <Text className="font-bold mb-1 mt-3">Φωτογραφίες</Text>
              <Text>[upload images]</Text>




              <TouchableOpacity className="bg-orange rounded p-2 mt-5 w-full" onPress={handleSubmit}>
                <Text className="text-center text-white font-bold text-lg">Δημιουργία</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>



      </ScrollView>
    </View>
  )
}