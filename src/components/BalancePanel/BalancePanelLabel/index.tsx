import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface BalancePanelLabelProps {
   label: string;
   value: string;
}

export function BalancePanelLabel({label, value}: BalancePanelLabelProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}