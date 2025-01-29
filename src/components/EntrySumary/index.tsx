import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { EntrySumaryChart } from "./EntrySumaryChart";
import { EntrySumaryList } from "./EntrySumaryList";

interface EntrySumaryProps {
  entriesGrouped?: Array<{ key: string; description: string; amount: number }>;
}
export function EntrySumary({ entriesGrouped }: EntrySumaryProps) {
  return (
    <View style={styles.container}>
      <EntrySumaryChart />
      <EntrySumaryList entriesGrouped={entriesGrouped} title="Categorias" />
    </View>
  );
}
