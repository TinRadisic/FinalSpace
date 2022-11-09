import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import ApiManager from "../../Api/ApiManager";
import { ConfigContext } from "../../Api/Context";
import CardComponent from "../CardComponent";

function HomeScreen({ navigation }) {
  const [episodes, setEpisodes] = useState([]);
  const [links, setLinks] = useState([]);

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
            <CardComponent episode={item} navigation={navigation}>
              {item.name}
            </CardComponent>
          )}
        />
      </View>
    </ConfigContext.Provider>
  );
}

export default HomeScreen;
