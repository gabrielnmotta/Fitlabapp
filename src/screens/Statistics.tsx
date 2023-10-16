import React from "react";
import { View, Text, ScrollView } from "react-native";
import Spacing from "../constants/Spacing";
import SimpleCard from "../components/Card/SimpleCard";
import CaloriesEated from "../components/Charts/CaloriesEated";
import HeaderResume from "../components/HeaderResume";

const Statistics = () => {
  return (
    <ScrollView
      style={{
        paddingHorizontal: Spacing.padding.base,
      }}
    >
      <SimpleCard>
        <HeaderResume title={`Calorias Ingeridas na semana`} />
        <View style={{ alignItems: "center" }}>
          <CaloriesEated />
        </View>
      </SimpleCard>
      <SimpleCard>
        <HeaderResume title={`Calorias Ingeridas na semana`} />
        <View style={{ alignItems: "center" }}>
          <CaloriesEated />
        </View>
      </SimpleCard>
      <SimpleCard>
        <HeaderResume title={`Calorias Ingeridas na semana`} />
        <View style={{ alignItems: "center" }}>
          <CaloriesEated />
        </View>
      </SimpleCard>
      <SimpleCard>
        <HeaderResume title={`Calorias Ingeridas na semana`} />
        <View style={{ alignItems: "center" }}>
          <CaloriesEated />
        </View>
      </SimpleCard>
      <View style={{ height: 100 }}></View>
    </ScrollView>
  );
};

export default Statistics;
