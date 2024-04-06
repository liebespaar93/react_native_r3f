import { SafeAreaView, Platform, StyleSheet, View, useWindowDimensions, ScrollView, Text, FlatList, SectionList, TextInput } from 'react-native';
import NavigationTutorial from './components/tutorial/NavigationTutorial';

export default function App() {
  const dimensions = useWindowDimensions();
  const windowWidth = dimensions.width;
  const windowHeight = dimensions.height;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavigationTutorial />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#ffdfcf',
  },
  container: {
    padding: 16,
    flex: 1,
    justifyContent: "center"
  },
  scrollView: {
    paddingHorizontal: 16,
  }
});
