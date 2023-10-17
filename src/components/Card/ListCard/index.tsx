import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
} from "react-native";
import foodsImagePaths from "../../../constants/FoodsImages";
import exerciseImagePaths from "../../../constants/WorkoutsImages";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { center } from "@shopify/react-native-skia";
import { useState } from "react";
import Colors from "../../../constants/Colors";
import { AddingDataI } from "../../../context/AppContext/type";

export interface ListCardI {
  type: string;
  id: number;
  image: string;
  name: string;
  calories: number;
  setVisible: (value: boolean) => void;
  setData: (value: AddingDataI) => void;
}

const ListCard = ({
  name,
  image,
  calories,
  type,
  setVisible,
  setData,
}: ListCardI) => {
  const handlePress = () => {
    const selectedData = {
      name: name,
      img: image,
      calories: calories,
      id: 0,
    };
    setVisible(true);
    setData(selectedData);
  };
  return (
    <TouchableOpacity style={[styles.card, styles.cardShadow]}>
      <View style={styles.cardHeader}>
        <Text style={styles.name}>{name}</Text>
        <Icon
          name="plus-circle-outline"
          size={24}
          color="#333"
          onPress={() => handlePress()}
        />
      </View>
      <Image
        style={styles.cardImage}
        source={
          type === "foods" ? foodsImagePaths[image] : exerciseImagePaths[image]
        }
      />
      <View style={styles.cardFooter}>
        <Icon name="fire" size={16} color={Colors.red_fire} />
        <Text style={styles.subTitle}>{calories} cal</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 2,
    marginVertical: 5,
    flexBasis: "48%",
    borderRadius: 15,
    backgroundColor: "#fff",
  },
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2.5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 100,
    width: 100,
    alignSelf: "center",
    borderRadius: 12,
  },
  name: {
    fontSize: 16,
    flex: 1,
    color: "#000",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    flex: 1,
    color: "#000",
    fontWeight: "bold",
  },
  icon: {
    height: 20,
    width: 20,
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "lightblue",
    padding: 12,
    borderRadius: 8,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
