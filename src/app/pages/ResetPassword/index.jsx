import React, { useEffect, useState, useContext } from "react";
import { KeyboardAvoidingView, TouchableOpacity, Text, View, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AuthContext from "../../contexts/auth";
import api from "../../services/api";

import { styles } from "./style";

export default function ResetPassword({ route, navigation }) {
  const { signOut } = useContext(AuthContext);
  const { email } = route.params;
  const [code, setCode] = useState("");
  const [cleanError, setCleanError] = useState(false);

  const verifyCode = async () => {
    try {
      await api.post("/verifycode", {
        email: email,
        code: code,
      });
      setCleanError(false);
      navigation.navigate("ChangePassword");
    } catch (err) {
      const { status } = err.response;
      if (status === 404 || status === 500) {
        setCleanError(true);
        console.log("Ocorreu um erro: ", err);
      } else signOut();   
    }
  };

  return (
    <KeyboardAvoidingView style={styles.Container}>
      <View style={styles.Back}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={30}
          color="#90cc0c"
          onPress={() => navigation.navigate("ForgotPassword")}
        />
      </View>
      <Text style={styles.Title}>Código de Redefinição de Senha</Text>
      <Text style={styles.Text}>
        Digite o código de redefinição de senha que foi enviado para você. Lembrando que não é a mesma que sua senha.
      </Text>
      {cleanError ? (
        <View style={styles.SectionInput}>
          <TextInput
            placeholder="Código"
            autoCapitalize="none"
            onChangeText={(text) => setCode(text)}
            onFocus={() => setCleanError(false)}
            placeholderTextColor={"#f02849"}
            style={styles.TextInputError}
          />
          <TouchableOpacity style={styles.Icon}>
            <MaterialCommunityIcons name={"alert"} color={"#f02849"} size={25} style={{ marginRight: 15 }} />
          </TouchableOpacity>
        </View>
      ) : (
        <TextInput placeholder="Código" autoCapitalize="none" onChangeText={(text) => setCode(text)} style={styles.TextInput} />
      )}
      <TouchableOpacity onPress={verifyCode} style={styles.Button}>
        <Text style={styles.TextButton}>Enviar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}