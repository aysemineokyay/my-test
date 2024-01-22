import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";

const Route = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: "Ürünler",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          contentStyle: { backgroundColor: "white" },
        })}
      />
    </Stack.Navigator>
  );
};

export default Route;

const styles = StyleSheet.create({});
