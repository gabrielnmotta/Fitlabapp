import { TextInput, View } from "react-native";
import Spacing from "../../constants/Spacing";
import Colors from "../../constants/Colors";
import FontSize from "../../constants/FontSize";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Search = () => {
  return (
    <View
      style={{
        backgroundColor: "#488538",
        paddingVertical: Spacing.padding.sm,
        paddingHorizontal: Spacing.padding.base,
        borderRadius: Spacing.borderRadius.base,
        marginVertical: Spacing.margin.xl,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Icon name="text-search" size={24} color={Colors.text} />
      <TextInput
        placeholder="Pesquisar"
        placeholderTextColor={Colors.text}
        style={{
          fontSize: FontSize.base,
          width: "80%",
        }}
      />
    </View>
  );
};

export default Search;
