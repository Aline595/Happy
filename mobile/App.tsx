import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold_Italic, Nunito_700Bold } from '@expo-google-fonts/nunito';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold, 
    Nunito_700Bold_Italic, 
    Nunito_700Bold
  });

  if(!fontsLoaded) {
    return null;
  }

  return (
    <Routes/>
  );
}
