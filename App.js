import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{paddingTop: 20, paddingHorizontal: 25}}>
      <Text>Hola, Coder!</Text>
      <text>¿Como estas?</text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3E50',
    alignItems: 'center',
    //item= ancho
    justifyContent: 'center',
    //content= alto
  }
});
