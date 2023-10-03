import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Historico/title';
import ListHistorico from './src/components/Historico/list';
import Main from './src/components/Historico/main';

export default function App() {
  return (
    <View>
      <Title/>
      <Main/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});