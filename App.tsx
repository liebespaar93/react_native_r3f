import { SafeAreaView, Platform, StyleSheet, View, useWindowDimensions, ScrollView } from 'react-native';
import PokemonCard from './components/tutorial/PokemonCard/PokemonCard';

export default function App() {
  const dimensions = useWindowDimensions();
  const windowWidth = dimensions.width;
  const windowHeight = dimensions.height;

  const charmanderData = {
    name: "Charmander",
    image: require("@/assets/pokemon/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  const squirtleData = {
    name: "Squirtle",
    image: require("@/assets/pokemon/squirtle.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("@/assets/pokemon/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("@/assets/pokemon/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };

  console.log(charmanderData)
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <ScrollView>
          <PokemonCard {...charmanderData} />
          <PokemonCard {...squirtleData} />
          <PokemonCard {...bulbasaurData} />
          <PokemonCard {...pikachuData} />
        </ScrollView>
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
    alignItems: "center",
    backgroundColor: Platform.OS === "ios" ? '#ffa13f' : '#ffdfcf'
  },
});
