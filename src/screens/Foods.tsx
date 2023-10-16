import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Search from "../components/Search";
import Spacing from "../constants/Spacing";
import useApp from "../context/AppContext";
import ListCard from "../components/Card/ListCard";

const Foods = () => {
  const [search, setSearch] = useState("");
  const { foods } = useApp();

  const filteredList = foods?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Search setSearch={setSearch} />

      {filteredList.map((data) => (
        <ListCard
          key={data.id}
          image={data.img}
          name={data.name}
          calories={data.calories}
          id={data.id}
          type="foods"
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.padding.base,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
    justifyContent: "space-between",
  },
});

export default Foods;
