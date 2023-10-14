import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  Switch,
  Image,
} from "react-native";
import { FIREBASE_AUTH, FIREBASE_DB, db } from "../../FirebaseConfig";
import { cpfMask } from "../utils";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const SignUpPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const auth = FIREBASE_AUTH;

  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate("Login" as never);
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response.user.uid);

      const userCollectionRef = collection(db, "users");

      await setDoc(doc(userCollectionRef, response.user.uid), {
        name: name,
        cpf: cpf,
      });

      console.log("Usuário adicionado com sucesso ao Firestore!");
    } catch (error) {
      console.error("Erro ao criar usuário e adicionar ao Firestore:", error);
    } finally {
      handleLoginPress();
    }
  };

  const areAllFieldsFilled = () => {
    return name !== "" && cpf !== "" && email !== "" && password !== "";
  };

  const buttonStyle =
    !acceptedTerms || !areAllFieldsFilled()
      ? { backgroundColor: "gray" }
      : styles.loginButtonContainer;

  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          source={require("../../assets/fitlab.png")}
          style={{ height: 300, width: 300 }}
          resizeMode="contain"
        />
      </View>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        Preencha todos os dados abaixo para criar conta{" "}
      </Text>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Nome"
          autoCapitalize="none"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          value={cpfMask(cpf)}
          placeholder="CPF - pode ser ficticio"
          autoCapitalize="none"
          keyboardType="numeric"
          maxLength={14}
          onChangeText={(text) => setCpf(text)}
        />
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
        <View style={styles.checkboxContainer}>
          <Switch value={acceptedTerms} onValueChange={setAcceptedTerms} />
          <Text>Aceitar Termos de Segurança</Text>
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <TouchableOpacity
              onPress={signUp}
              style={[styles.loginButtonContainer, buttonStyle]}
              disabled={!acceptedTerms || !areAllFieldsFilled()}
            >
              <Text style={styles.loginButtonText}>Criar Conta</Text>
            </TouchableOpacity>
          </>
        )}
      </KeyboardAvoidingView>
      <View style={styles.signUpContainer}>
        <Text>Já possui cadastro ? </Text>
        <Text style={styles.signUpText} onPress={handleLoginPress}>
          Clique Aqui{" "}
        </Text>
      </View>
    </View>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
    backgroundColor: "#fff",
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    borderColor: "#333",
    backgroundColor: "#fff",
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
    color: "#009688",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});
