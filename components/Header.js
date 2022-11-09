import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import CharacterScreen from "./screens/CharacterScreen";

const Header = (navigation) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen name="FINAL SPACE EPISODES" component={HomeScreen} />
        <Stack.Screen name="EPISODE DETAILS" component={DetailsScreen} />
        <Stack.Screen name="CharacterScreen" component={CharacterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

export default Header;
