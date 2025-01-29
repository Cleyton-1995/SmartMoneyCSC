import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

interface BalancePanelLabelProps {
  label: string;
  currentBalance: number;
}

export function BalancePanelLabel({
  label,
  currentBalance,
}: BalancePanelLabelProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{currentBalance}</Text>
    </View>
  );
}
