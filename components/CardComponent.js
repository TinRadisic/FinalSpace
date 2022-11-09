import React from "react";
import { StyleSheet } from "react-native";
import { ConfigContext } from "../Api/Context";
import { Card, Button, Title } from "react-native-paper";

const CardComponent = (props) => {
  const [episode] = React.useState(props.episode);
  let context = React.useContext(ConfigContext);

  return (
    <Card
      style={styles.container}
      onPress={() => props.navigation.navigate("EPISODE DETAILS", episode)}
    >
      <Card.Cover
        source={{
          uri: episode.img_url,
        }}
      />
      <Card.Content
        style={{
          marginTop: 20,
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        <Title style={{ width: '50%', textAlign: "left" }}>{episode.name}</Title>
        <Title style={{ width: '50%', textAlign: "right" }}>{episode.air_date}</Title>
      </Card.Content>
    </Card>
  );
};
const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  container: {
    alignContent: "center",
    margin: 37,
  },
});

export default CardComponent;
