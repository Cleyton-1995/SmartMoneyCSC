import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Main } from './src/screens/Main';
import { NewEntry } from './src/screens/NewEntry';
import { Report } from './src/screens/Report';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Main/> */}
      {/* <NewEntry/> */}
      <Report/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
