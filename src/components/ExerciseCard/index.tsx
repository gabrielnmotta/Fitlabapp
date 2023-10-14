import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Workout as WorkoutType } from "../../api";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Spacing from "../../constants/Spacing";
import PersonalizedClick from "../PersonalizedClick";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface ExerciseProps {
  workout: WorkoutType;
  onPress?: () => void;
}

const ExerciseCard = ({ workout, onPress }: ExerciseProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: Colors.primary,
        marginRight: Spacing.margin.lg,
        borderRadius: Spacing.borderRadius.base,
        overflow: "hidden",
      }}
    >
      <Image
        source={workout.image}
        style={{
          width: 270,
          height: 200,
        }}
      />
      <View
        style={{
          padding: Spacing.padding.base,
        }}
      >
        <View
          style={{
            marginBottom: Spacing.margin.base,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <PersonalizedClick style={{}}>{workout.name}</PersonalizedClick>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon name="star" color={Colors.yellow} size={24} />
            <PersonalizedClick style={{ marginLeft: Spacing.margin.sm }}>
              {workout.rating}
            </PersonalizedClick>
          </View>
        </View>
        <PersonalizedClick>{workout.coach}</PersonalizedClick>
      </View>
    </TouchableOpacity>
  );
};

export default ExerciseCard;

const styles = StyleSheet.create({});
