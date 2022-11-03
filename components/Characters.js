import React from "react";
import { Text, Image, View } from "react-native";

import { ConfigContext } from "../Api/Context";

const Characters = () => {
  let linkovi = React.useContext(ConfigContext);
  console.log(linkovi);
  return (
    <View>
      <Text> {linkovi[3].name} </Text>
    </View>
  );
};
export default Characters;
