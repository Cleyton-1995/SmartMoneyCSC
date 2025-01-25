import React from "react";
import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";

interface EntrySumaryListProps {
  title: string;
}

export function EntrySumaryList({ title }: EntrySumaryListProps) {
  const data = [
    { key: "Alimentação: $ 201" },
    { key: "Combustível: $ 100" },
    { key: "Aluguel: $ 300" },
    { key: "Lazer: $ 250" },
    { key: "Outros: $ 1200" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Text>{item.key}</Text>
        )}
      />
    </View>
  );
}
