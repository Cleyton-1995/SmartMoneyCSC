import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { BalancePanel } from "../../components/BalancePanel";
import { EntrySumary } from "../../components/EntrySumary";
import { EntryList } from "../../components/EntryList";

export function Main({ navigation }: any) {
  const currentBalance =  2064.35;

  return (
    <View style={styles.container}>
      <BalancePanel
        currentBalance={currentBalance}
        onPress={() => navigation.navigate("NewEntry")}
      />
      <EntrySumary />
      <EntryList label="Últimos Lançamentos" />
    </View>
  );
}
