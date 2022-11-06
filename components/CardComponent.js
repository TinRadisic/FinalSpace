import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ConfigContext } from "../Api/Context";
import { Card, Button, Title, Paragraph } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

const CardComponent = (props) => {
  const [episode] = React.useState(props.episode);
  let context = React.useContext(ConfigContext);

  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title>{episode.name}</Title>
      </Card.Content>
      <Card.Cover
        source={{
          uri: episode.img_url,
        }}
      />
      <Card.Content>
        <Paragraph>{episode.air_date}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => props.navigation.navigate('EPISODE DETAILS', episode)}>See details</Button>
      </Card.Actions>
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
