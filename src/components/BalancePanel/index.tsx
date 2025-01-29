import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { BalancePanelLabel } from "./BalancePanelLabel";
import { BalancePanelChart } from "./BalancePanelChart";

interface BalancePanelProps {
  onPress: () => void;
  currentBalance: number  ;
}

export function BalancePanel({ onPress, currentBalance }: BalancePanelProps) {

  return (
    <View style={styles.container}>
      <BalancePanelLabel label="Saldo Atual" currentBalance={currentBalance} />

      <BalancePanelChart />

      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <Text>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
