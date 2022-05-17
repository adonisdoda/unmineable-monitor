import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Monitor from './src/screens/monitor';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Monitor />
    </View >
  );
}