import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { BalancePanelLabel } from "./BalancePanelLabel";
import { BalancePanelChart } from "./BalancePanelChart";

export function BalancePanel() {
  return (
    <View style={styles.container}>
      <BalancePanelLabel label="Saldo Atual" value="$ 2.102,45" />
      
      <BalancePanelChart />
      
      <TouchableOpacity activeOpacity={0.8}>
        <Text>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
