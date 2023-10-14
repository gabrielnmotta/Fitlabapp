import "react-native-gesture-handler";
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
import HeaderResume from "../components/HeaderResume";
import Spacing from "../constants/Spacing";
import { getCurrentDate } from "../utils";
import Card from "../components/Card";
import DailySpendingChart from "../components/Charts/DailySpendingChart";
import { workoutPlans, workouts } from "../api";
import ExerciseCard from "../components/ExerciseCard";
import { Colors } from "react-native/Libraries/NewAppScreen";
import PersonalizedClick from "../components/PersonalizedClick";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Principal = ({ navigation }: RouterProps) => {
  const { height } = Dimensions.get("window");

  const currentDate = getCurrentDate();

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
        <Card>
          <View style={{ alignItems: "center" }}>
            <DailySpendingChart />
          </View>
        </Card>

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
          {workoutPlans.map((plan) => (
            <TouchableOpacity
              style={{
                padding: Spacing.padding.sm,
                marginBottom: Spacing.margin.base,
                backgroundColor: Colors.primary,
                borderRadius: Spacing.borderRadius.base,
                flexDirection: "row",
              }}
              key={plan.id}
            >
              <Image
                source={plan.image}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: Spacing.borderRadius.base,
                }}
              />
              <View
                style={{
                  marginLeft: Spacing.margin.base,
                  justifyContent: "space-between",
                }}
              >
                <PersonalizedClick style={{}}>{plan.name}</PersonalizedClick>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon name="calendar-outline" size={16} color={Colors.text} />
                  <PersonalizedClick
                    style={{
                      marginLeft: Spacing.margin.base,
                    }}
                  >
                    {plan.duration} | {plan.location}
                  </PersonalizedClick>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <PersonalizedClick
                    style={{
                      marginLeft: Spacing.margin.sm,
                    }}
                  >
                    {plan.rating}
                  </PersonalizedClick>
                </View>
              </View>
            </TouchableOpacity>
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
          snapToInterval={270 + Spacing.margin.lg}
        >
          {workoutPlans.map((plan) => (
            <TouchableOpacity
              style={{
                padding: Spacing.padding.sm,
                marginBottom: Spacing.margin.base,
                backgroundColor: Colors.primary,
                borderRadius: Spacing.borderRadius.base,
                flexDirection: "row",
              }}
              key={plan.id}
            >
              <Image
                source={plan.image}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: Spacing.borderRadius.base,
                }}
              />
              <View
                style={{
                  marginLeft: Spacing.margin.base,
                  justifyContent: "space-between",
                }}
              >
                <PersonalizedClick style={{}}>{plan.name}</PersonalizedClick>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon name="calendar-outline" size={16} color={Colors.text} />
                  <PersonalizedClick
                    style={{
                      marginLeft: Spacing.margin.base,
                    }}
                  >
                    {plan.duration} | {plan.location}
                  </PersonalizedClick>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <PersonalizedClick
                    style={{
                      marginLeft: Spacing.margin.sm,
                    }}
                  >
                    {plan.rating}
                  </PersonalizedClick>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={{ height: 95 }}></View>
    </ScrollView>
  );
};

export default Principal;
