import { StyleSheet, Text, View } from 'react-native';
import { getConfig, setConfig } from 'app-config'

export default function App() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Olá mundo!</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: getConfig().primary,
  }
})
