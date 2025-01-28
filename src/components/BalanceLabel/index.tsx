import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export function BalanceLabel() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>$ 2.064,35</Text>
    </View>
  );
}