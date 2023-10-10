import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { Button, View } from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Principal = ({ navigation }: RouterProps) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate("Foods")}
        title="Open Details"
      />
      <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout" />
    </View>
  );
};

export default Principal;
