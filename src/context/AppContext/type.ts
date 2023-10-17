import { ImageSourcePropType } from "react-native";

export interface FoodI {
  id: number;
  name: string;
  calories: number;
  img: string;
  quantity?: number;
}

export interface WorkoutI {
  id: number;
  name: string;
  calories: number;
  img: string;
  duration?: number;
}

export interface AddingDataI {
  id: number;
  name: string;
  img: string;
  calories: number;
  duration?: number;
  quantity?: number;
}

export interface ImagePathsType {
  [key: string]: ImageSourcePropType;
}

export interface MostEatedI {
  value: number;
  name: string;
}

export interface CaloriesEatedI {
  date: string[];
  values: number[];
}

export interface AppContextI {
  getFoods: () => void;
  foods: FoodI[];
  getWorkouts: () => void;
  workouts: WorkoutI[];
  getFoodsAtualData: () => void;
  foodsAtualData: FoodI[];
  getWorkoutsAtualData: () => void;
  workoutsAtualData: WorkoutI[];
  postData: (type: string, data: AddingDataI) => void;
  postDataLoading: boolean;
}
