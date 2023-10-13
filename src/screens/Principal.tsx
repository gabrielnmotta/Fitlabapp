import { NavigationProp } from "@react-navigation/native";
import React from "react";
import {
  Button,
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import Search from "../components/Search";
import HeaderResume from "../components/HeaderResume";
import Spacing from "../constants/Spacing";
import PersonalizedClick from "../components/PersonalizedClick";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { workouts } from "../api";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { getCurrentDate } from "../utils";
import Card from "../components/Card";
import EChartsReact from "echarts-for-react";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

const Principal = ({ navigation }: RouterProps) => {
  const { height } = Dimensions.get("window");

  const currentDate = getCurrentDate();

  return (
    <View style={{ height: height, paddingHorizontal: 6 }}>
      <HeaderResume
        title={`Resumo Diário - ${currentDate}`}
        complementation="Ver Detalhado"
        path="Statistics"
      />
      <Card>
        <View>
          <Text>Calorias Consumidas</Text>
        </View>
      </Card>

      <HeaderResume
        title={`Alimentação de hoje - ${currentDate}`}
        icon="playlist-plus"
      />
      <HeaderResume
        title={`Exercícios de hoje - ${currentDate}`}
        icon="playlist-plus"
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        pagingEnabled
        snapToInterval={270 + Spacing.margin.lg}
      ></ScrollView>
    </View>
  );
};

export default Principal;
