import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { EntrySumaryChart } from "./EntrySumaryChart";
import { EntrySumaryList } from "./EntrySumaryList";

export function EntrySumary() {
  return (
    <View style={styles.container}>
      <EntrySumaryChart />
      <EntrySumaryList title="Categorias" />
    </View>
  );
}
