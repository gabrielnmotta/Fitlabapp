import { createContext, useContext, useEffect, useState } from "react";
import { AppContextI, FoodI, WorkoutI } from "./type";

const AppContext = createContext<AppContextI>({} as AppContextI);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [foods, setFoods] = useState<FoodI[]>([] as FoodI[]);
  const [workouts, setWorkouts] = useState<WorkoutI[]>([] as WorkoutI[]);
  const [foodsAtualData, setFoodsAtualData] = useState<FoodI[]>([] as FoodI[]);
  const [workoutsAtualData, setWorkoutsAtualData] = useState<WorkoutI[]>(
    [] as WorkoutI[]
  );

  const getFoods = async () => {
    try {
      const response = await fetch("http://192.168.1.12:3000/api/v1/foods");
      const data = await response.json();

      if (response.status === 200) {
        setFoods(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getWorkouts = async () => {
    try {
      const response = await fetch("http://192.168.1.12:3000/api/v1/workouts");
      const data = await response.json();

      if (response.status === 200) {
        setWorkouts(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getWorkoutsAtualData = async () => {
    try {
      const response = await fetch(
        "http://192.168.1.12:3000/api/v1/workouts_atual_data"
      );
      const data = await response.json();

      if (response.status === 200) {
        setWorkoutsAtualData(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getFoodsAtualData = async () => {
    try {
      const response = await fetch(
        "http://192.168.1.12:3000/api/v1/foods_atual_data"
      );
      const data = await response.json();

      if (response.status === 200) {
        setFoodsAtualData(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getFoods();
    getWorkouts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        getFoods,
        foods,
        getWorkouts,
        workouts,
        getFoodsAtualData,
        foodsAtualData,
        getWorkoutsAtualData,
        workoutsAtualData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default function useApp(): AppContextI {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
