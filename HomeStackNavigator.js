import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home";
import Player from "./Screens/Player";

const HomeStack = createStackNavigator();
export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Player" component={Player} />
    </HomeStack.Navigator>
  );
}
