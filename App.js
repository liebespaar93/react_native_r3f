import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ViewTutorial from './components/tutorial/ViewTutorial';
import TextTutorial from './components/tutorial/TextTutorial';

export default function App() {
  return (
    <View style={styles.container}>
      <ViewTutorial>
        <TextTutorial></TextTutorial>
      </ViewTutorial>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
