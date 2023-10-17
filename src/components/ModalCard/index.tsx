import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import Modal from "react-native-modal";
import Colors from "../../constants/Colors";
import { AddingDataI } from "../../context/AppContext/type";
import useApp from "../../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

interface ModalCardI {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  data: AddingDataI;
  type: string;
  setData: (value: AddingDataI) => void;
}

const ModalCard = ({
  visible,
  setVisible,
  data,
  type,
  setData,
}: ModalCardI) => {
  const [inputValue, setInputValue] = useState<number>(0);
  const { postData, foodsAtualData, workoutsAtualData, postDataLoading } =
    useApp();
  const navigation = useNavigation();

  useEffect(() => {
    if (type === "workouts") {
      setData({
        ...data,
        id: workoutsAtualData.length + 1,
        duration: inputValue,
      });
    } else if (type === "foods") {
      setData({
        ...data,
        quantity: inputValue,
        id: foodsAtualData.length + 1,
      });
    }
  }, [type, inputValue]);

  const toggleModalSave = () => {
    postData(type, data);
    setVisible(!visible);

    if (!postDataLoading) navigation.navigate("Home" as never);
  };

  return (
    <View style={styles.container}>
      <Modal isVisible={visible} style={styles.modal}>
        <View style={styles.modalContent}>
          {type === "foods" ? (
            <Text style={styles.modalText}>
              Deseja Adicionar {data.name} a sua dieta diária ? Se sim preencha
              o campo abaixo e salve.
            </Text>
          ) : (
            <Text style={styles.modalText}>
              Deseja Adicionar {data.name} ao seu treino diário ? Se sim
              preencha o campo abaixo e salve.
            </Text>
          )}

          <TextInput
            style={styles.input}
            placeholder={
              type === "foods" ? "Quantidade em gramas" : "Duração em minutos"
            }
            keyboardType="numeric"
            value={inputValue as any}
            onChangeText={(text) => setInputValue(parseInt(text, 10))}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setVisible(!visible)}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => toggleModalSave()}
            >
              {postDataLoading ? (
                <LottieView
                  source={require("../../../assets/gifs/loading.json")}
                  autoPlay
                  loop
                />
              ) : (
                <Text style={styles.buttonText}>Salvar</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  modalText: {
    marginBottom: 12,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  closeButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: Colors.primary_700,
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
    width: "100%",
  },
});

export default ModalCard;
