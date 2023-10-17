import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState(false);
  const auth = FIREBASE_AUTH;

  const navigation = useNavigation();

  const handleSignUpPress = () => {
    navigation.navigate("SignUp" as never);
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      response;
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          source={require("../../assets/fitlab.png")}
          style={{ height: 300, width: 300 }}
          resizeMode="contain"
        />
      </View>

      <KeyboardAvoidingView behavior="padding">
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={password}
          placeholder="Senha"
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <TouchableOpacity
              onPress={handleLogin}
              style={styles.loginButtonContainer}
            >
              <Text style={styles.loginButtonText}>Entrar</Text>
            </TouchableOpacity>
          </>
        )}
      </KeyboardAvoidingView>
      <View style={styles.signUpContainer}>
        <Text>Não possui cadastro ? </Text>
        <Text style={styles.signUpText} onPress={handleSignUpPress}>
          Clique Aqui{" "}
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    borderColor: "#ccc",
  },
  img: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  loginButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  signUpContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 24,
  },
  signUpText: {
    color: Colors.primary_900,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
