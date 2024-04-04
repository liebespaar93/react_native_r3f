import { SafeAreaView, Platform, StyleSheet, View, useWindowDimensions, ScrollView, Text, FlatList } from 'react-native';
import PokemonCard from './components/tutorial/PokemonCard/PokemonCard';

import pokemonList from "@/data/pokemon.json"
import FlatListTutorial from './components/tutorial/FlatListTutorial';

export default function App() {
  const dimensions = useWindowDimensions();
  const windowWidth = dimensions.width;
  const windowHeight = dimensions.height;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <FlatListTutorial list={pokemonList}></FlatListTutorial>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#ffdfcf'
  },
  container: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 16
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1
  },
  cardText: {
    fontSize: 24
  },
  headerText: {
    textAlign: "center",
    fontSize: 30,
    margin: 10,
  },
  footerText: {
    textAlign: "center",
    fontSize: 30,
    margin: 10,
  }
});
