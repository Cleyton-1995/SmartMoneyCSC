import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface BalancePanelLabelProps {

}

export function BalancePanelLabel() {
  return (
    <View style={styles.container}>
      <Text>BalancePanelLabel</Text>
    </View>
  );
}