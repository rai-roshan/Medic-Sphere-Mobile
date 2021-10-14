import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import WelcomeScreen from './Screen/Welcome';
import LoginScreen from './Screen/Login';
import Signup from './Screen/SignUp';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="black"
      />
      <Stack.Navigator initialRouteName = 'userWelcomeScreen'>
        <Stack.Screen 
          name = 'userWelcomeScreen'
          component = {WelcomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name = 'userLoginScreen'
          component = {LoginScreen}
          options = {{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="userSignupScreen"
          component={Signup}
          options={{
            headerShown: false,
            // title : 'Register' 
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
