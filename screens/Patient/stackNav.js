import React from "react";
// import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PatientHome from './home';
import Prescription from "./prescription";

export default function PatientStackNavigation() {
    const Stack = createNativeStackNavigator();
    return (
            <Stack.Navigator screenOptions={{ headerStyle: {
            backgroundColor: '#34c778',
            } }}>
                <Stack.Screen 
                name="PatientHome" 
                options={ {title: "Patient Home"} }
                component={PatientHome} />
                <Stack.Screen 
                name="PatientPrescrition" 
                options={ {title: "Prescrition"} }
                component={Prescription} />
            </Stack.Navigator>
    );
}