import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import ModalTutorial from './components/tutorial/ModalTutorial';
import StatusBarTutorial from './components/tutorial/StatusBarTutorial';
import ActivityIndicatorTutorial from './components/tutorial/ActivityIndicatorTutorial';
import AlertTutoriai from './components/tutorial/AlertTutoriai';
import CustomComponentsTutorial from './components/tutorial/CustomComponentsTutorial';

export default function App() {

  return (
    <View style={styles.container}>
      <CustomComponentsTutorial></CustomComponentsTutorial>
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
