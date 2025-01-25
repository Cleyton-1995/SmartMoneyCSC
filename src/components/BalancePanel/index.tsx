import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { BalancePanelLabel } from './BalancePanelLabel';

export function BalancePanel() {
  return (
    <View style={styles.container}>
      <BalancePanelLabel/>
    </View>
  );
}