import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { UserIcon, ListBulletIcon, XMarkIcon,  CalendarDaysIcon, EyeIcon} from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import { Formik } from 'formik';
import * as yup from 'yup';

export default function AddPostScreen() {
    const navigation = useNavigation();

    const closeModal = () => {
      navigation.pop();
    }

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
    // <ScrollView className="p-5">
    <View className="p-5 flex-1">
        <View className="flex-row mb-5">
        <Text className="text-2xl font-bold flex-1 mt-1">Δημιουργία Ανακοίνωσης</Text>

        <View className="flex-row mt-1">
            <TouchableOpacity className="ml-3" onPress={closeModal}>
            <XMarkIcon color="#fd5602" size={30}/>
            </TouchableOpacity>
        </View>

        </View>
        <ScrollView>
        


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
                
                <Text className="font-bold mb-1">Τίτλος</Text>
                <TextInput
                    className="bg-white p-2 w-full rounded"
                    placeholder="Τίτλος"
                    onBlur={handleBlur('username')}
                    onChangeText={handleChange('username')}
                    value={values.username}
                    error={Boolean(touched.username) && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                    autoCapitalize="none"
                    autoCorrect={false}
                />


                <Text className="font-bold mb-1 mt-3">Κατηγορία</Text>
                <View className="bg-white p-2 w-full rounded">
                <RNPickerSelect
                    placeholder={{
                        label: 'Επίλεξε κατηγορία...'
                      }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Cat1', value: 1 },
                        { label: 'Cat2', value: 2 },
                        { label: 'Cat3', value: 3 },
                    ]}
                />
                </View>

                {/* <TextInput
                    className="bg-white p-2 w-full rounded"
                    placeholder="Κατηγορία"
                    onBlur={handleBlur('username')}
                    onChangeText={handleChange('username')}
                    value={values.username}
                    error={Boolean(touched.username) && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                    autoCapitalize="none"
                    autoCorrect={false}
                /> */}


                <Text className="font-bold mb-1 mt-3">Περιγραφή</Text>
                <TextInput
                    multiline={true}
                    className="bg-white p-2 w-full rounded"
                    placeholder="Περιγραφή"
                    onBlur={handleBlur('username')}
                    onChangeText={handleChange('username')}
                    value={values.username}
                    error={Boolean(touched.username) && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                    autoCapitalize="none"
                    autoCorrect={true}
                />


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