import "react-native-gesture-handler";
import { NavigationProp, useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Dimensions,
  ScrollView,
  ImageSourcePropType,
} from "react-native";
import HeaderResume from "../components/HeaderResume";
import Spacing from "../constants/Spacing";
import { getCurrentDate } from "../utils";
import DailySpendingChart from "../components/Charts/DailyResumeChart";
import SimpleCard from "../components/Card/SimpleCard";
import AtualCard from "../components/Card/AtualCard";
import useApp from "../context/AppContext";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Principal = ({ navigation }: RouterProps) => {
  const [totalCaloriesIngested, setTotalCaloriesIngested] = useState<number>(0);
  const [totalCaloriesSpended, setTotalCaloriesSpended] = useState<number>(0);

  const { height } = Dimensions.get("window");
  const {
    getFoodsAtualData,
    foodsAtualData,
    getWorkoutsAtualData,
    workoutsAtualData,
  } = useApp();
  const currentDate = getCurrentDate();

  useFocusEffect(
    React.useCallback(() => {
      getWorkoutsAtualData();
      getFoodsAtualData();

      setTotalCaloriesIngested(
        foodsAtualData.reduce((total, data) => total + data.calories, 0)
      );

      setTotalCaloriesSpended(
        workoutsAtualData.reduce((total, data) => total + data.calories, 0)
      );
    }, [])
  );

  return (
    <ScrollView
      style={{
        paddingHorizontal: Spacing.padding.base,
      }}
    >
      <View style={{ height: height, paddingHorizontal: 6 }}>
        <HeaderResume
          title={`Resumo Diário - ${currentDate}`}
          complementation="Ver Detalhado"
          path="Statistics"
        />
        <SimpleCard>
          <View style={{ alignItems: "center" }}>
            <DailySpendingChart
              totalCaloriesIngested={totalCaloriesIngested}
              totalCaloriesSpended={totalCaloriesSpended}
            />
          </View>
        </SimpleCard>

        <HeaderResume
          title={`Alimentação de hoje - ${currentDate}`}
          icon="playlist-plus"
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          pagingEnabled
          snapToInterval={270 + Spacing.margin.lg}
        >
          {foodsAtualData.map((data) => (
            <AtualCard
              name={data.name}
              image={data.img as string}
              quantity={data.quantity}
              id={data.id}
              type="foods"
              calories={data.calories}
            />
          ))}
        </ScrollView>

        <HeaderResume
          title={`Exercícios de hoje - ${currentDate}`}
          icon="playlist-plus"
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          pagingEnabled
          snapToInterval={270 + Spacing.margin.xl}
        >
          {workoutsAtualData.map((data) => (
            <AtualCard
              name={data.name}
              image={data.img}
              duration={data.duration}
              id={data.id}
              type="workouts"
              calories={data.calories}
            />
          ))}
        </ScrollView>
      </View>
      <View style={{ height: 95 }}></View>
    </ScrollView>
  );
};

export default Principal;
