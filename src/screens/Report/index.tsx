import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { BalanceLabel } from "../../components/BalanceLabel";
import { EntrySumary } from "../../components/EntrySumary";
import { EntryList } from "../../components/EntryList";
import { Picker } from "@react-native-picker/picker";

export function Report() {
  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View>
        <Picker>
          <Picker.Item label="Todas as categorias" />
        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias" />
        </Picker>
      </View>

      <EntrySumary />
      <EntryList />

      <View style={styles.button}>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.buttonTextSave}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.buttonTextClose}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
