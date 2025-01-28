import { Main } from "./src/pages/Main";
import { NavigationContainer } from "@react-navigation/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewEntry } from "./src/screens/NewEntry";
import { Report } from "./src/screens/Report";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Main"
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="NewEntry" component={NewEntry} />
        <Stack.Screen name="Report" component={Report} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
