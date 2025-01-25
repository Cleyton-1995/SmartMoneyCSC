import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { BalancePanel } from '../../components/BalancePanel';
import { EntrySumary } from '../../components/EntrySumary';

export function Main() {
  return (
    <View style={styles.container}>
      <BalancePanel/>
      <EntrySumary/>
    </View>
  );
}