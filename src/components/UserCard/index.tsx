import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface UserCardProps {
  userName: string;
}

const UserCard = ({ userName }: UserCardProps) => {
  return (
    <View style={styles.card}>
      <View style={{ justifyContent: "center" }}>
        <Text>Bem Vindo,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <TouchableOpacity onPress={() => FIREBASE_AUTH.signOut()}>
        <Icon name="logout" size={30} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#618264",
    paddingHorizontal: 20,
    paddingTop: 46,
    paddingBottom: 20,

    borderRadius: 20,
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default UserCard;
