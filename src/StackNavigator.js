import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";
import Home from "./Screens/Home";
import CreateList from "./Screens/CreateList";
import ListScreen from "./Screens/ListScreen";

const Stack = createNativeStackNavigator();

const StackNavigaor = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Sign In" component={SignIn} />
        <Stack.Screen name="Sign Up" component={SignUp} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List Screen" component={ListScreen} />
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="Create List" component={CreateList} />
        </Stack.Group>
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigaor;
