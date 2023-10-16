import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import foodsImagePaths from "../../../constants/FoodsImages";
import exerciseImagePaths from "../../../constants/WorkoutsImages";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { center } from "@shopify/react-native-skia";

export interface ListCardI {
  type: string;
  id: number;
  image: string;
  name: string;

  calories: number;
}

const ListCard = ({ name, image, calories, type }: ListCardI) => {
  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: "#67755c" }]}>
      <View style={styles.cardHeader}>
        <Text style={styles.name}>{name}</Text>
        <Icon name="plus-circle-outline" size={24} color="#333" />
      </View>
      <Image
        style={styles.cardImage}
        source={
          type === "foods" ? foodsImagePaths[image] : exerciseImagePaths[image]
        }
      />
      <View style={styles.cardFooter}>
        <Icon name="fire" size={16} color="#ff6700" />
        <Text style={styles.subTitle}>{calories} cal</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 2,
    marginVertical: 2,
    flexBasis: "48%",
    borderRadius: 15,
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
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 12,
    flex: 1,
    color: "#FFFFFF",
  },
  icon: {
    height: 20,
    width: 20,
  },
});
