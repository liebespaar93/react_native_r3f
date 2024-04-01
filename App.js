import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import ModalTutorial from './components/tutorial/ModalTutorial';

export default function App() {

  return (
    <View style={styles.container}>
      <ModalTutorial></ModalTutorial>
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
