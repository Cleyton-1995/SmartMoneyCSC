import React from "react";
import { FlatList, Text, View } from "react-native";

import { styles } from "./styles";

interface EntryListProps {
  label: string;
  entries?: Array<{ key: string; description: string; amount: number }>;
}

export function EntryList({ label, entries }: EntryListProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>

      <FlatList
        data={entries}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Text>{`${item.description} - $ ${item.amount}`}</Text>
        )}
      />
    </View>
  );
}
