import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ApiManager from "../Api/ApiManager";
import { ConfigContext } from "../Api/Context";
import CardComponent from "./CardComponent";

function HomeScreen() {
  const [episodes, setEpisodes] = useState([]);
  const [links, setLinks] = useState([]);
  const [characters, setCharacters] = useState([]);

  const getLinks = async () => {
    try {
      const links = (await ApiManager.get()).data.map((arg) => {
        return { name: arg.name, path: arg.path };
      });
      setLinks(links);
    } catch (error) {
      console.log(error);
    }
  };
  const getData = async () => {
    try {
      const result = await ApiManager.get("episode");
      setEpisodes(result.data);
    } catch (error) {
      console.error(error);
    }
    try {
      const result = await ApiManager.get("character");
      setCharacters(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <ConfigContext.Provider value={links}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <FlatList
          data={episodes}
          renderItem={({ item }) => (
            <CardComponent episode={item}>{item.name}</CardComponent>
          )}
        />
      </View>
    </ConfigContext.Provider>
  );
}

const Header = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen name="FINAL SPACE EPISODES" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

export default Header;
