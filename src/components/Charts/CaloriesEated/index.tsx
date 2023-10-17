import "react-native-gesture-handler";
import { useRef, useEffect, useState } from "react";
import { View } from "react-native";
import * as echarts from "echarts/core";
import { LineChart, RadarChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import { SVGRenderer, SkiaChart } from "@wuba/react-native-echarts";
import { PieChart } from "echarts/charts";
import { CaloriesEatedI } from "../../../context/AppContext/type";

echarts.use([SVGRenderer, LineChart, GridComponent, PieChart, RadarChart]);

const CaloriesEated = () => {
  const skiaRef = useRef(null);
  const [caloriesEated, setCaloriesEated] = useState<CaloriesEatedI>(
    {} as CaloriesEatedI
  );

  const getCaloriesEated = async () => {
    try {
      const response = await fetch(
        "http://192.168.1.15:3000/api/v1/calories_eated"
      );
      const data = await response.json();

      if (response.status === 200) {
        setCaloriesEated(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getCaloriesEated();
    const option = {
      xAxis: {
        type: "category",
        legend: {},
        data: caloriesEated.date
          ? caloriesEated
          : [
              "10/10",
              "11/10",
              "12/10",
              "13/10",
              "14/10",
              "15/10",
              "16/10",
              "17/10",
            ],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: caloriesEated.date
            ? caloriesEated.date
            : [150, 30, 300, 900, 600, 390, 570, 810],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
        },
      ],
    };
    let chart: any;
    if (skiaRef.current) {
      chart = echarts.init(skiaRef.current, "light", {
        renderer: "svg",
        width: 350,
        height: 300,
      });
      chart.setOption(option);
    }

    return () => chart?.dispose();
  }, []);
  return (
    <View>
      <SkiaChart ref={skiaRef} />
    </View>
  );
};

export default CaloriesEated;
