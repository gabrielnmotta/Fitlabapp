import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Search from "../components/Search";
import Spacing from "../constants/Spacing";
import useApp from "../context/AppContext";
import ListCard from "../components/Card/ListCard";
import { AddingDataI } from "../context/AppContext/type";
import ModalCard from "../components/ModalCard";

const Foods = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<AddingDataI>({} as AddingDataI);
  const [visible, setVisible] = useState<boolean>(false);
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
          setVisible={setVisible}
          setData={setData}
        />
      ))}
      <ModalCard
        visible={visible}
        setVisible={setVisible}
        data={data}
        type="foods"
        setData={setData}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.padding.base,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
    paddingBottom: 100,
    justifyContent: "space-between",
  },
});

export default Foods;
