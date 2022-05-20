import React from 'react'
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useFonts, Nunito_300Light, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { NavigationContainer } from '@react-navigation/native';

import WithdrawProvider from './src/contexts/withdraw_context';
import { DrawerNavigation } from './src/settings/navigations/drawer';

export default function App() {

  let [fontsLoaded] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_700Bold
  });

  if (!fontsLoaded) {
    return <View />;
  }


  return (
    <View style={{ flex: 1 }}>
      <WithdrawProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <DrawerNavigation />
        </NavigationContainer>
      </WithdrawProvider>

    </View >
  );
}