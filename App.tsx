import { SafeAreaView, Platform, StyleSheet, View, useWindowDimensions, ScrollView, Text, FlatList, SectionList, TextInput } from 'react-native';
import PokemonCard from './components/tutorial/PokemonCard/PokemonCard';

import pokemonList from "@/data/pokemon.json"
import groupPokemonList from "@/data/group-data.json"
import SectionListTutorial from './components/tutorial/SectionListTutorial';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import InputTextTutorial from './components/tutorial/InputTextTutorial';

export default function App() {
  const dimensions = useWindowDimensions();
  const windowWidth = dimensions.width;
  const windowHeight = dimensions.height;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <InputTextTutorial />
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
    padding: 16,
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 16,
  }
});
