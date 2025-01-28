import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { EntryListItem } from './EntryListItem';

export function EntryList() {
  return (
    <View style={styles.container}>
      <EntryListItem/>
    </View>
  );
}