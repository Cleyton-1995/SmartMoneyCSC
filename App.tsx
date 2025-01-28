import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Main } from './src/screens/Main';
import { NewEntry } from './src/screens/NewEntry';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Main/> */}
      <NewEntry/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
