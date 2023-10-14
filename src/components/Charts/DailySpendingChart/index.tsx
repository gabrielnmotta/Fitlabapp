import "react-native-gesture-handler";
import { useRef, useEffect } from "react";
import { View } from "react-native";
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import { SVGRenderer, SkiaChart } from "@wuba/react-native-echarts";
import { PieChart } from "echarts/charts";
import { GaugeChart } from "echarts/charts";

echarts.use([SVGRenderer, LineChart, GridComponent, PieChart, GaugeChart]);

const DailySpendingChart = () => {
  const skiaRef = useRef(null);

  useEffect(() => {
    const gaugeData = [
      {
        value: 20,
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
        value: 40,
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
        value: 60,
        name: "Commonly",
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
            formatter: "{value} kcal",
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

export default DailySpendingChart;
