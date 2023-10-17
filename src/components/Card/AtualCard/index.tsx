import { View, TouchableOpacity, Image, Text } from "react-native";
import Spacing from "../../../constants/Spacing";
import PersonalizedClick from "../../PersonalizedClick";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import foodsImagePaths from "../../../constants/FoodsImages";
import exerciseImagePaths from "../../../constants/WorkoutsImages";
import Colors from "../../../constants/Colors";

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
        backgroundColor: "white",
        borderRadius: Spacing.borderRadius.base,
        flexDirection: "row",
        marginRight: Spacing.margin.base,
        ...shadowStyle,
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
          alignItems: "center",
        }}
      >
        <PersonalizedClick style={{ fontWeight: "bold", textAlign: "center" }}>
          {name}
        </PersonalizedClick>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon name="fire" size={16} color={Colors.red_fire} />
          <PersonalizedClick
            style={{
              marginLeft: Spacing.margin.base,
              textAlign: "center",
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
            color={Colors.primary}
          />
          <PersonalizedClick
            style={{
              marginLeft: Spacing.margin.base,
              textAlign: "center",
            }}
          >
            {type === "foods" ? (
              <Text>{quantity}g</Text>
            ) : (
              <Text>{duration} min</Text>
            )}
          </PersonalizedClick>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const shadowStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
};

export default AtualCard;
