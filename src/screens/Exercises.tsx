import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Search from "../components/Search";
import Spacing from "../constants/Spacing";
import useApp from "../context/AppContext";
import ListCard from "../components/Card/ListCard";

const Exercises = () => {
  const [search, setSearch] = useState("");
  const { workouts } = useApp();

  const filteredList = workouts?.filter((item) =>
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
          type="workouts"
        />
      ))}
    </ScrollView>
  );
};

export default Exercises;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.padding.base,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
    justifyContent: "space-between",
  },
});
