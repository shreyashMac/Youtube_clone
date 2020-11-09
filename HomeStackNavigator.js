import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home";
import Player from "./Screens/Player";
import Search from "./Screens/Search";

const HomeStack = createStackNavigator();
export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Player" component={Player} />
      <HomeStack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: true,
          headerTitle: "",
          //headerBackground:,
        }}
      />
    </HomeStack.Navigator>
  );
}
