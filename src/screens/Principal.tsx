import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { Button, View, Text, Dimensions } from "react-native";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Principal = ({ navigation }: RouterProps) => {
  const { height } = Dimensions.get("window");

  return (
    <View style={{ height: height }}>
      <Text>Pagina principal</Text>
    </View>
  );
};

export default Principal;
