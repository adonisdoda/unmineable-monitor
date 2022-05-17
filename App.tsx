import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useFonts, Nunito_300Light, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

import Monitor from './src/screens/monitor';

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
      <StatusBar style="auto" />
      <Monitor />
    </View >
  );
}