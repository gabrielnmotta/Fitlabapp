import React, { useRef, useState } from "react";
import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
import Search from "../components/Search";
import Spacing from "../constants/Spacing";
import useApp from "../context/AppContext";
import ListCard from "../components/Card/ListCard";
import ModalCard from "../components/ModalCard";
import { AddingDataI } from "../context/AppContext/type";

const Exercises = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<AddingDataI>({} as AddingDataI);
  const [visible, setVisible] = useState<boolean>(false);
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
          setVisible={setVisible}
          setData={setData}
        />
      ))}
      <ModalCard
        visible={visible}
        setVisible={setVisible}
        data={data}
        type="workouts"
        setData={setData}
      />
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
    paddingBottom: 100,
    justifyContent: "space-between",
  },
  containerA: {
    flex: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  text: {
    fontSize: 20,
  },
});
