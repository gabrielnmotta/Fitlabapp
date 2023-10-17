import "react-native-gesture-handler";
import { useRef, useEffect, useState } from "react";
import { View } from "react-native";
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import { SVGRenderer, SkiaChart } from "@wuba/react-native-echarts";
import { PieChart } from "echarts/charts";
import { GaugeChart } from "echarts/charts";
import useApp from "../../../context/AppContext";
import { getCurrentDate } from "../../../utils";

echarts.use([SVGRenderer, LineChart, GridComponent, PieChart, GaugeChart]);

const DailyResumeChart = () => {
  const [totalCaloriesIngested, setTotalCaloriesIngested] = useState<number>(0);
  const [totalCaloriesSpended, setTotalCaloriesSpended] = useState<number>(0);
  const skiaRef = useRef(null);
  const { foodsAtualData, workoutsAtualData } = useApp();
  const currentDate = getCurrentDate();

  useEffect(() => {
    setTotalCaloriesIngested(
      foodsAtualData.reduce((total, data) => total + data.calories, 0)
    );

    setTotalCaloriesSpended(
      workoutsAtualData.reduce((total, data) => total + data.calories, 0)
    );
    const gaugeData = [
      {
        value: totalCaloriesSpended ? totalCaloriesSpended : 190,
        name: "Calorias Gastadas",
        title: {
          offsetCenter: ["0%", "-35%"],
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ["0%", "-20%"],
        },
      },
      {
        value: totalCaloriesIngested ? totalCaloriesIngested : 300,
        name: "Calorias Ingeridas",
        title: {
          offsetCenter: ["0%", "-5%"],
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ["0%", "10%"],
        },
      },
      {
        value: totalCaloriesSpended - totalCaloriesIngested,
        name: "Gasto - Ingerido",
        title: {
          offsetCenter: ["0%", "25%"],
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ["0%", "40%"],
        },
      },
    ];
    const option = {
      series: [
        {
          type: "gauge",
          startAngle: 90,
          endAngle: -270,
          pointer: {
            show: false,
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              borderWidth: 1,
              borderColor: "#464646",
            },
          },
          axisLine: {
            lineStyle: {
              width: 20,
            },
          },
          splitLine: {
            show: false,
            distance: 10,
            length: 10,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
            distance: 50,
          },
          data: gaugeData,
          title: {
            fontSize: 14,
          },
          detail: {
            width: 30,
            height: 10,
            fontSize: 10,
            color: "inherit",
            borderColor: "inherit",
            borderRadius: 20,
            borderWidth: 1,
            formatter: "{value} cal",
          },
        },
      ],
    };
    let chart: any;
    if (skiaRef.current) {
      chart = echarts.init(skiaRef.current, "light", {
        renderer: "svg",
        width: 400,
        height: 400,
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

export default DailyResumeChart;
