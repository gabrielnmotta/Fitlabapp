import { TextInput, View, StyleSheet } from "react-native";
import Spacing from "../../constants/Spacing";
import Colors from "../../constants/Colors";
import FontSize from "../../constants/FontSize";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface SearchI {
  setSearch: (text: string) => void;
}

const Search = ({ setSearch }: SearchI) => {
  return (
    <View style={styles.container}>
      <Icon name="text-search" size={24} color={Colors.primary} />
      <TextInput
        placeholder="Pesquisar por nome"
        placeholderTextColor={Colors.primary}
        style={styles.input}
        onChangeText={(text) => setSearch(text)}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: Spacing.padding.sm,
    paddingHorizontal: Spacing.padding.base,
    borderRadius: Spacing.borderRadius.base,
    marginVertical: Spacing.margin.base,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    fontSize: FontSize.base,
    width: "96%",
  },
});
