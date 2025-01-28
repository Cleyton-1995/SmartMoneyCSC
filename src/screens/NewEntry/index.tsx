import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { BalanceLabel } from "../../components/BalanceLabel";
import { Ionicons } from "@expo/vector-icons";

export function NewEntry({navigation}: any) {
  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />

        <View style={styles.buttonIcons}>
          <TouchableOpacity activeOpacity={0.8}>
            <Ionicons
              style={styles.icon}
              name="camera"
              size={30}
              color="#ffffff"
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Ionicons
              style={styles.icon}
              name="location"
              size={30}
              color="#FFFFFF"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.buttonTextAdd}>Adicionar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Main")} activeOpacity={0.8}>
            <Text style={styles.buttonTextCancel}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
