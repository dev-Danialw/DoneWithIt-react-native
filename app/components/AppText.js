import React from "react";
import { Text } from "react-native";
import defautStyles from "../config/styles";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[defautStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
