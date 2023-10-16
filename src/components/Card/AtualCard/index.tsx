import { View, TouchableOpacity, Image, Text } from "react-native";
import Spacing from "../../../constants/Spacing";
import { Colors } from "react-native/Libraries/NewAppScreen";
import PersonalizedClick from "../../PersonalizedClick";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import foodsImagePaths from "../../../constants/FoodsImages";
import exerciseImagePaths from "../../../constants/WorkoutsImages";

interface AtualCardI {
  type: string;
  id: number;
  image: string;
  name: string;
  duration?: any;
  quantity?: number;
  calories: number;
}

const AtualCard = ({
  type,
  id,
  image,
  name,
  duration,
  quantity,
  calories,
}: AtualCardI) => {
  return (
    <TouchableOpacity
      style={{
        padding: Spacing.padding.sm,
        marginBottom: Spacing.margin.base,
        backgroundColor: "#ddf3c2",
        borderRadius: Spacing.borderRadius.base,
        flexDirection: "row",
        marginRight: Spacing.margin.base,
      }}
      key={id}
    >
      <Image
        source={
          type === "foods" ? foodsImagePaths[image] : exerciseImagePaths[image]
        }
        style={{
          width: 100,
          height: 100,
          borderRadius: Spacing.borderRadius.base,
        }}
      />
      <View
        style={{
          marginLeft: Spacing.margin.base,
          justifyContent: "space-between",
        }}
      >
        <PersonalizedClick style={{}}>{name}</PersonalizedClick>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon name="fire" size={16} color="#ff6700" />
          <PersonalizedClick
            style={{
              marginLeft: Spacing.margin.base,
            }}
          >
            {calories} cal
          </PersonalizedClick>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon
            name={type === "foods" ? "bowl-mix" : "clock"}
            size={16}
            color={Colors.text}
          />
          <PersonalizedClick
            style={{
              marginLeft: Spacing.margin.base,
            }}
          >
            {type === "foods" ? (
              <Text>{quantity}g</Text>
            ) : (
              <Text>{duration}</Text>
            )}
          </PersonalizedClick>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AtualCard;
