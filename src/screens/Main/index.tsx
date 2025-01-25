import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { BalancePanel } from '../../components/BalancePanel';

export function Main() {
  return (
    <View style={styles.container}>
      <BalancePanel/>
    </View>
  );
}