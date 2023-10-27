import { StatusBar } from 'expo-status-bar';
import { Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import LogoScreen from './screens/LogoScreen';
import MenuScreen from './screens/MenuScreen';
import SinglePostScreen from './screens/SinglePostScreen';
import SingleRequestScreen from './screens/SingleRequestScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import FindBlockOfFlatScreen from './screens/FindBlockOfFlatScreen';
import SelectAppartment from './screens/SelectAppartmentScreen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AddPostScreen from './screens/AddPostScreen';
import AddRequestScreen from './screens/AddRequestScreen';


export default function App() {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      {/* <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    // keyboardVerticalOffset={Platform.OS==="ios" ? 64 : 0}
    style={{ flex: 1 }}
  > */}

  {/* <KeyboardAwareScrollView extraHeight={120}> */}
      <Stack.Navigator>
        <Stack.Screen name="WelcomeLogo" component={LogoScreen} options={{ headerShown: false }}/>

        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="FindBlockOfFlat" component={FindBlockOfFlatScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SelectAppartment" component={SelectAppartment} options={{ headerShown: false }}/>
        
        <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }}/>

        <Stack.Screen name="SingleRequest" component={SingleRequestScreen} options={{ headerShown: false, presentation: 'modal' }}/>
        <Stack.Screen name="AddRequest" component={AddRequestScreen} options={{ headerShown: false, presentation: 'modal' }}/>
        
        <Stack.Screen name="SinglePost" component={SinglePostScreen} options={{ headerShown: false, presentation: 'modal' }}/>
        <Stack.Screen name="AddPost" component={AddPostScreen} options={{ headerShown: false, presentation: 'modal' }}/>
        
      </Stack.Navigator>
      {/* </KeyboardAvoidingView> */}
      {/* </KeyboardAwareScrollView> */}
    </NavigationContainer>
  );
}
