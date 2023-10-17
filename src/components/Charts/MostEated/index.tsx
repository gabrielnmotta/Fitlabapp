import "react-native-gesture-handler";
import { useRef, useEffect, useState } from "react";
import { View } from "react-native";
import * as echarts from "echarts/core";
import { LineChart, RadarChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import { SVGRenderer, SkiaChart } from "@wuba/react-native-echarts";
import { PieChart } from "echarts/charts";
import { MostEatedI } from "../../../context/AppContext/type";
import AmbientVariables from "../../../constants/AmbientVariables";

echarts.use([SVGRenderer, LineChart, GridComponent, PieChart, RadarChart]);

const MostEated = () => {
  const skiaRef = useRef(null);
  const [mostEated, setMostEated] = useState<MostEatedI>({} as MostEatedI);

  const getMostEated = async () => {
    try {
      const response = await fetch(`${AmbientVariables.API_URL}/most_eated`);
      const data = await response.json();

      if (response.status === 200) {
        setMostEated(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getMostEated();
    const option = {
      title: {
        text: "Referer of a Website",
        subtext: "Fake Data",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "Mais comidos",
          type: "pie",
          radius: "50%",
          data: [
            mostEated.name ? mostEated : { value: 1048, name: "Maçã" },
            { value: 735, name: "Uva" },
            { value: 580, name: "Arroz" },
            { value: 484, name: "Frango" },
            { value: 300, name: "Pera" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    let chart: any;
    if (skiaRef.current) {
      chart = echarts.init(skiaRef.current, "light", {
        renderer: "svg",
        width: 350,
        height: 150,
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

export default MostEated;
