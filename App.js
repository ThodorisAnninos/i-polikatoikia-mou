import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import LogoScreen from './screens/LogoScreen';
import MenuScreen from './screens/MenuScreen';
import SinglePostScreen from './screens/SinglePostScreen';
import SingleRequestScreen from './screens/SingleRequestScreen';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeLogo" component={LogoScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }}/>

        <Stack.Screen name="SingleRequest" component={SingleRequestScreen} options={{ headerShown: false, presentation: 'modal' }}/>
        <Stack.Screen name="SinglePost" component={SinglePostScreen} options={{ headerShown: false, presentation: 'modal' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
