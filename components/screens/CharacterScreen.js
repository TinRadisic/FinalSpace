import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height / 3;
const windowWidth = Dimensions.get("window").width;

const CharacterScreen = (props) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{ uri: props.route.params.img_url }}
      />
      <ScrollView>
      <Text style={styles.name}>Character name: {props.route.params.name}</Text>
      <Text style={styles.name}>Status: {props.route.params.status}</Text>
      <Text style={styles.name}>Species: {props.route.params.species}</Text>
      <Text style={styles.name}>Gender: {props.route.params.gender}</Text>
      <Text style={styles.name}>Hair Color: {props.route.params.hair}</Text>
      <Text style={styles.name}>Origin: {props.route.params.origin}</Text>
      <Text style={styles.name}>Abilities: {props.route.params.abilities} </Text>
      <Text style={styles.name}>Alias: {props.route.params.alias}</Text>
      </ScrollView>
      </View>
    
  );
};

const styles = StyleSheet.create({
  image: {
    height: windowHeight,
    width: windowWidth,
    resizeMode: "cover",
  },
  name: {
    paddingLeft: 10,
    fontSize: 20,
    paddingTop: 10,
    fontWeight: "bold",
  },
});

export default CharacterScreen;
