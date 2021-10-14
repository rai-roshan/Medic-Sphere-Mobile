import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import PatientStackNavigation from './screens/Patient/stackNav';

export default function App() {
  return (
    <PaperProvider>
      <PatientStackNavigation/>
    </PaperProvider>
  );
}
