import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export interface BalanceLabelProps {
  label: string;
  currentBalance: number;
}

export function BalanceLabel({label, currentBalance}: BalanceLabelProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{currentBalance}</Text>
    </View>
  );
}