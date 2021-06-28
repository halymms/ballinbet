import React from 'react';
import AppLoading from 'expo-app-loading';

import { 
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
 } from '@expo-google-fonts/roboto';
import {
  Ruda_400Regular,
  Ruda_500Medium,
  Ruda_600SemiBold,
  Ruda_700Bold
} from '@expo-google-fonts/ruda';

import Routes from './src/routes/Index';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Ruda_400Regular,
    Ruda_500Medium,
    Ruda_600SemiBold,
    Ruda_700Bold
  })

  if(!fontsLoaded)
    return <AppLoading/>

  return (
    <Routes />
  )
}
