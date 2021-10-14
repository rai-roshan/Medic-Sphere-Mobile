import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PatientHome from './home';
import Prescription from "./prescription";

export default function PatientStackNavigation() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerStyle: {
            backgroundColor: '#34c778',
          } }}>
                <Stack.Screen name="PatientHome" component={PatientHome} />
                <Stack.Screen name="PatientPrescrition" component={Prescription} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}