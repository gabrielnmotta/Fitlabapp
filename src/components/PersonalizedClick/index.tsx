import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import React, { ReactNode } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import FontSize from "../../constants/FontSize";

type Props = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
} & TextProps;

const PersonalizedClick: React.FC<Props> = ({
  children,
  style,
  ...OtherProps
}) => {
  return (
    <Text
      style={[
        {
          color: Colors.text,

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

export default PersonalizedClick;
