import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { BalancePanel } from "../../components/BalancePanel";
import { EntrySumary } from "../../components/EntrySumary";
import { EntryList } from "../../components/EntryList";

export function Main({ navigation }: any) {
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
      <BalancePanel
        currentBalance={currentBalance}
        onPress={() => navigation.navigate("NewEntry")}
      />
      <EntrySumary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} label="Últimos Lançamentos" />
    </View>
  );
}
