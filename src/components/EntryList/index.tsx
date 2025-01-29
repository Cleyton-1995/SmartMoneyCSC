import React from "react";
import { FlatList, Text, View } from "react-native";

import { styles } from "./styles";

interface EntryListProps {
  label: string;
}

export function EntryList({label}: EntryListProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>

      <FlatList
        data={[
          { key: "Padaria Asa Branca: $ 10" },
          { key: "Supermercado Flor: $ 190" },
          { key: "Posto Soares: $ 190" },
        ]}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    </View>
  );
}
