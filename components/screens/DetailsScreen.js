import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import ApiManager from "../../Api/ApiManager";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";

const windowHeight = Dimensions.get("window").height / 3;
const windowWidth = Dimensions.get("window").width;

const DetailsScreen = (props) => {
  const [character, setCharacter] = useState([]);

  const getCharacter = async () => {
    try {
      const result = await ApiManager.get("character");
      setCharacter(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <View>
      <Image
        style={styles.image}
        source={{ uri: props.route.params.img_url }}
      ></Image>
      <Text style={styles.air_date}>{props.route.params.air_date}</Text>
      <Text style={styles.name}>Episode name: {props.route.params.name}</Text>
      <Text style={styles.name}>Director: {props.route.params.director}</Text>
      <View style={{ height: windowHeight }}>
        <ScrollView>
          <View style={styles.charactersView}>
            {character != [] &&
              character.map((arg) => (
                <TouchableOpacity key={arg.img_url} onPress={() => props.navigation.navigate("CharacterScreen", arg)}>
                <Image
                  key={arg.img_url}
                  style={styles.avatar}
                  source={{ uri: arg.img_url }}
                />
                </TouchableOpacity>
              ))}
          </View>
        </ScrollView>
      </View>
      <View style={{ flex: 1, flexDirection: "row-reverse" }}>
        <Image
          source={require("../../images/dislike.png")}
          style={{ height: 60, width: 60 }}
        />
        <Image
          source={require("../../images/like.png")}
          style={{ height: 60, width: 60 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: windowHeight,
    width: windowWidth,
    resizeMode: "cover",
  },
  air_date: {
    textAlign: "right",
    fontSize: 20,
    paddingTop: 10,
    paddingRight: 10,
  },
  name: {
    paddingLeft: 10,
    fontSize: 20,
    paddingTop: 10,
    fontWeight: "bold",
  },
  avatar: {
    borderRadius: 50,
    height: 50,
    width: 50,
    margin: 10,
  },
  charactersView: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    flex: 1,
  },
});

export default DetailsScreen;
