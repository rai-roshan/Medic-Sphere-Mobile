import React , { useEffect, useMemo, useReducer} from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import PatientStackNavigation from './Screens/Patient/stackNav';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar , ActivityIndicator , View, Text } from 'react-native';

import WelcomeScreen from './Screens/Auth/Welcome';
import LoginScreen from './Screens/Auth/Login';
import Signup from './Screens/Auth/SignUp';

import { AuthContext } from './Context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const Stack = createNativeStackNavigator();
  const initialLoginState = {
    isLoading: true,
    healthId: null,
    userToken: null
  };

  loginReducer = (prevState , action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN' : 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        }
      case 'LOGIN' : 
        return {
          ...prevState,
          healthId: action.id,
          userToken: action.token,
          isLoading: false,
        }
      case 'LOGOUT' : 
        return {
          ...prevState,
          healthId: null,
          userToken: null,
          isLoading: false,
        }
      case 'REGISTER' : 
        return {
          ...prevState,
          healthId: action.id,
          userToken: action.token,
          isLoading: false,
        }
    }
  };

  const [loginState , dispatch] = useReducer(loginReducer , initialLoginState);

  const authContext = useMemo(() => ({
    signIn: async(healthId , password) => {
      let userToken = null;
      if( healthId === '1234' && password === '1234') {
        userToken = 'abcdef';
        setLoginStatus(true);
        try {
          await AsyncStorage.setItem('userToken' , userToken);
        } catch(e) {
          console.log(e);
        }
        dispatch({ type: 'LOGIN' , id: healthId , token: userToken });
      }
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' })
    },
    signUp: () => {

    }
  }) , []);

  useEffect(() => {
    setTimeout(async() => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN' , token: userToken});
    } , 1000);
  } , [])

  if( loginState.isLoading ) {
    return(
      <View style = {{flex: 1 , justifyContent: 'center' , alignItems: 'center'}}>
        <ActivityIndicator size="large" color="black"/>
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor="black"
        />
        {
          loginState.userToken ===  null ? (
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
                }} 
              />
            </Stack.Navigator>
          ) : (
            <PaperProvider>
                <Stack.Navigator initialRouteName = 'PatientStackNav'>
                  <Stack.Screen
                    name="PatientStackNav"
                    component={PatientStackNavigation}
                    options={{
                      headerShown: false 
                    }} 
                  />
                </Stack.Navigator>
            </PaperProvider>
          )
        }
      </NavigationContainer>
    </AuthContext.Provider>
  )
}