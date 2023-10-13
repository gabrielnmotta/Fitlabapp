import { Text } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Props } from ".";

export const PersonalizedClick: React.FC<Props> = ({
  children,
  style,
  ...OtherProps
}) => {
  return (
    <Text
      style={[
        {
          color: Colors.text,
          fontFamily: Font["poppins-regular"],
          fontSize: FontSize.base,
        },
        style,
      ]}
      {...OtherProps}
    >
      {children}
    </Text>
  );
};
