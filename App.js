import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { AppState, SafeAreaView, StyleSheet, Text, View } from "react-native";
import StackNavigator from "./src/StackNavigator";
import ListUpState from "./src/context/ListUpState";
export default function App() {
  return (
    <ListUpState>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ListUpState>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
