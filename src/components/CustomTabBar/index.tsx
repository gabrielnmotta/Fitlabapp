import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

export default function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };
          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttonTab}
            >
              <View style={{ alignItems: "center", padding: 4 }}>
                <View
                  style={[
                    styles.innerButton,
                    {
                      backgroundColor: isFocused
                        ? Colors.primary_100
                        : "transparent",
                    },
                  ]}
                >
                  <MaterialCommunityIcons
                    name={options.tabBarIcon}
                    key={route.index}
                    size={30}
                    color={isFocused ? Colors.primary_900 : Colors.neutral}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    borderRadius: 99,
    flexDirection: "row",
    marginBottom: Platform.OS === "ios" ? 38 : 24,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    gap: 8,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonTab: {
    justifyContent: "center",
    alignItems: "center",
  },
  innerButton: {
    padding: 18,
    borderRadius: 99,
  },
});
