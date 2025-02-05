import AsyncStorage from '@react-native-async-storage/async-storage';

// Definição das interfaces
interface Category {
  id: number;
  name: string;
}

interface Entry {
  id: number;
  amount: number;
  category: string;
  entryAt: string; // ou 'Date' se preferir lidar com objetos Date
}

// Função para simular a obtenção de dados do AsyncStorage
export async function getAsyncStorage(): Promise<{ categories: Category[], entries: Entry[] }> {
  try {
    // Tentando recuperar as categorias e entradas armazenadas
    const categoriesData = await AsyncStorage.getItem('categories');
    const entriesData = await AsyncStorage.getItem('entries');

    // Se as categorias ou entradas não existirem, cria objetos vazios
    const categories: Category[] = categoriesData ? JSON.parse(categoriesData) : [];
    const entries: Entry[] = entriesData ? JSON.parse(entriesData) : [];

    return { categories, entries };
  } catch (error) {
    console.error("Erro ao recuperar dados do AsyncStorage:", error);
    return { categories: [], entries: [] };
  }
}

// Função para salvar categorias e entradas no AsyncStorage
export async function saveToAsyncStorage(categories: Category[], entries: Entry[]): Promise<void> {
  try {
    // Salvando categorias e entradas no AsyncStorage
    await AsyncStorage.setItem('categories', JSON.stringify(categories));
    await AsyncStorage.setItem('entries', JSON.stringify(entries));

    console.log("Dados salvos com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar no AsyncStorage:", error);
  }
}
