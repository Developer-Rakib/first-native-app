import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cuntries from './Components/Cuntries';

export default function App() {
  return (
    <View >
      <Text>Visit Cuntry</Text>
      <Cuntries></Cuntries>
      <StatusBar style="auto" />
    
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
