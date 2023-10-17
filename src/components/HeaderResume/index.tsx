import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import React from "react";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import { Colors } from "react-native/Libraries/NewAppScreen";
import PersonalizedClick from "../PersonalizedClick";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface Props {
  title?: string;
  complementation?: string;
  path?: string;
  icon?: string;
}

const HeaderResume: React.FC<Props> = ({
  title,
  complementation,
  path,
  icon,
}) => {
  const navigation = useNavigation();

  const customAlert = (title: string, message: string) => {
    Alert.alert(
      title,
      message,
      [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
          style: "cancel",
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  const handlePress = () => {
    if (path === "Exercises") {
      navigation.navigate(path as never);
      customAlert(
        "ATENÇÃO",
        "Para adicionar exercício à sua rotina diária escolha o exercício desejado, clique no botão + e depois digite o tempo que você praticou o exercìcio e confirma."
      );
    } else if (path === "Foods") {
      navigation.navigate(path as never);
      customAlert(
        "ATENÇÃO",
        "Para adicionar alimento à sua rotina diária escolha o alimento desejado, clique no botão + e depois digite a quantidade (em gramas) que você ingeriu e confirma."
      );
    } else {
      navigation.navigate(path as never);
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: Spacing.margin.lg,
      }}
    >
      <PersonalizedClick
        style={{
          fontSize: FontSize.sm,
          color: Colors.accent,
          fontWeight: "bold",
        }}
      >
        {title}
      </PersonalizedClick>
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
        onPress={handlePress}
      >
        {icon && <Icon name={icon} size={24} color="#009688" />}
        {complementation && (
          <PersonalizedClick
            style={{
              fontSize: FontSize.sm,
              color: "#009688",
              fontWeight: "bold",
            }}
          >
            {complementation}
          </PersonalizedClick>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default HeaderResume;

const styles = StyleSheet.create({});
