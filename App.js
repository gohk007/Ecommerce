import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Restaurant, orderDeliver } from "./screens";
import MyTabs from "./Navigation/Tabs";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={MyTabs}></Stack.Screen>
        <Stack.Screen name="Restaurant" component={Restaurant}></Stack.Screen>
        <Stack.Screen
          name="orderDeliver"
          component={orderDeliver}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
