import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveEntry() {
  let data = {
    id: "ABC",
    amount: 12.4,
    entryAt: new Date().toISOString(),
    isInit: false,
  };

  try {
    // Armazenando no AsyncStorage
    await AsyncStorage.setItem('entryData', JSON.stringify(data));
    console.log("Entry salvo:", data);
  } catch (error) {
    console.error("Erro ao salvar no AsyncStorage:", error);
  }

  return data;
}

export async function getEntry() {
  try {
    const data = await AsyncStorage.getItem('entryData');
    if (data !== null) {
      return JSON.parse(data); // converte de volta para objeto
    }
  } catch (error) {
    console.error("Erro ao recuperar no AsyncStorage:", error);
  }

  return null;
}
