import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { BalancePanel } from '../../components/BalancePanel';
import { EntrySumary } from '../../components/EntrySumary';
import { EntryList } from '../../components/EntryList';

export function Main() {
  return (
    <View style={styles.container}>
      <BalancePanel/>
      <EntrySumary/>
      <EntryList/>
    </View>
  );
}