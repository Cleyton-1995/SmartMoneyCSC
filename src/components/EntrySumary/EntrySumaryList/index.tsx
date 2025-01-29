import React from "react";
import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";

interface EntrySumaryListProps {
  title: string;
  entriesGrouped?: Array<{ key: string; description: string; amount: number }>;
}

export function EntrySumaryList({
  title,
  entriesGrouped,
}: EntrySumaryListProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        data={entriesGrouped}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Text>{`${item.description} - $ ${item.amount}`}</Text>
        )}
      />
    </View>
  );
}
