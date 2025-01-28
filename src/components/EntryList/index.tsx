import React from "react";
import { FlatList, Text, View } from "react-native";

import { styles } from "./styles";

export function EntryList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimos Lançamentos</Text>

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
