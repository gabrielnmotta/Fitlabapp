import { View, StyleSheet } from "react-native";

type SimpleCardProps = {
  children: React.ReactNode;
};

const SimpleCard = ({ children }: SimpleCardProps) => {
  return <View style={styles.card}>{children}</View>;
};

export default SimpleCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
