import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from '@expo/vector-icons';

import colors from "../constants/colors";


const HeaderButtons = (props) => {
  return(
    <HeaderButtons
    {...props}
    IconComponent = {Ionicons}
    iconSize = {23}
    color = {Platform.OS === 'android' ? 'white' : Colors.primary}
    />
  );
};

export default HeaderButtons;
