import React, { useEffect, useState } from "react";
import { View, FlatList, Text, Image } from "react-native";
import ApiManager from "../../Api/ApiManager";
import { ConfigContext } from "../../Api/Context";
import CardComponent from "../CardComponent";
import { StyleSheet } from "react-native";
import axios from "axios";

const DetailsScreen = (props) => {
  const [characterImages, setCharacterImages] = useState([]);

  const getCharacterImages = async () => {
    try {
      if (props.route.params.characters) {
        let imageUrls = [];
        props.route.params.characters.forEach(async (element) => {
          let img_url = (await axios.get(element)).data.img_url;
          imageUrls.push(img_url);
        });
        setCharacterImages(imageUrls);
        console.log(characterImages)
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCharacterImages()
    //console.log(characterImages);
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
      <FlatList
        data={characterImages}
        renderItem={({ item }) => (
          <Text>{item}</Text>
          //<Image style={styles.image} source={{ uri: item }}></Image>
        )}
      />
      {/* {characterImages != []
        ? characterImages.map((arg) => {
            {
              console.log(arg);
              return <Text>{arg}</Text>;
            } //<Image style={styles.image} source={{ uri: arg }}></Image>;
          })
        : console.log('asdasdasdas')} */}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "50%",
    width: "100%",
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
});

export default DetailsScreen;
