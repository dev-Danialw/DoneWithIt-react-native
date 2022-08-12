import React from "react";
import { Text } from "react-native";
import defautStyles from "../config/styles";

function AppText({ children, style }) {
  return <Text style={[defautStyles.text, style]}>{children}</Text>;
}

export default AppText;
