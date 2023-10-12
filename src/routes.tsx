import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Principal from "./screens/Principal";
import Foods from "./screens/Foods";
import CustomTabBar from "./components/CustomTabBar";
import Icon from "react-native-vector-icons/MaterialIcons";
import Exercises from "./screens/Exercises";
import Statistics from "./screens/Statistics";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#121212",
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: "#fff",
        },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Principal}
        options={{
          tabBarIcon: "home" as any,
        }}
      />
      <Tab.Screen
        name="Foods"
        component={Foods}
        options={{
          tabBarIcon: "food-variant" as any,
        }}
      />
      <Tab.Screen
        name="Excercises"
        component={Exercises}
        options={{
          tabBarIcon: "dumbbell" as any,
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarIcon: "chart-arc" as any,
        }}
      />
    </Tab.Navigator>
  );
}
