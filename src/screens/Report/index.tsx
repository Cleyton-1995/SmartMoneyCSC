import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { BalanceLabel } from "../../components/BalanceLabel";
import { EntrySumary } from "../../components/EntrySumary";
import { EntryList } from "../../components/EntryList";
import { Picker } from "@react-native-picker/picker";

export function Report() {
  const currentBalance = 2064.35;

  const entriesGrouped = [
    { key: "1", description: "Alimentação", amount: 10 },
    { key: "2", description: "Combustível", amount: 10 },
    { key: "3", description: "Aluguel", amount: 10 },
    { key: "4", description: "Lazer", amount: 10 },
    { key: "5", description: "Outros", amount: 10 },
  ];

  const entries = [
    { key: "1", description: "Padaria Asa Branca", amount: 10 },
    { key: "2", description: "Supermercado Flor", amount: 190 },
    { key: "3", description: "Posto Soares", amount: 190 },
  ];

  return (
    <View style={styles.container}>
      <BalanceLabel label="Saldo Atual" currentBalance={currentBalance} />

      <View>
        <Picker>
          <Picker.Item label="Todas as categorias" />
        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias" />
        </Picker>
      </View>

      <EntrySumary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} label="Últimos Lançamentos" />

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
