import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import ModalTutorial from './components/tutorial/ModalTutorial';
import StatusBarTutorial from './components/tutorial/StatusBarTutorial';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBarTutorial></StatusBarTutorial>
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
