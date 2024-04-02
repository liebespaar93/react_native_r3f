import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import ModalTutorial from './components/tutorial/ModalTutorial';
import StatusBarTutorial from './components/tutorial/StatusBarTutorial';
import ActivityIndicatorTutorial from './components/tutorial/ActivityIndicatorTutorial';
import AlertTutoriai from './components/tutorial/AlertTutoriai';
import CustomComponentsTutorial from './components/tutorial/CustomComponentsTutorial';
import StyleSheetTutorial from './components/tutorial/StyleSheetTutorial';
import BoxStyle from './components/BoxStyle';

export default function App() {

  return (
    <View style={styles.container}>
    <BoxStyle style={{backgroundColor:"#1c4c56"}}>1c4c56</BoxStyle>
      <BoxStyle style={{backgroundColor:"#ffbbbb"}}>ffbbbb</BoxStyle>
      <BoxStyle style={{backgroundColor:"#1eae98"}}>1eae98</BoxStyle>
      <BoxStyle style={{backgroundColor:"#6fd6ff"}}>6fd6ff</BoxStyle>
      <BoxStyle style={{backgroundColor:"#fe90af"}}>fe90af</BoxStyle>
      <BoxStyle style={{backgroundColor:"#ff8c8c"}}>ff8c8c</BoxStyle>
      <BoxStyle style={{backgroundColor:"#a890fe"}}>a890fe</BoxStyle>
      <BoxStyle style={{backgroundColor:"#ffffcf"}}>ffffcf</BoxStyle>
      <BoxStyle style={{backgroundColor:"#fca5f1"}}>fca5f1</BoxStyle>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    paddingTop: 30,
    backgroundColor: '#ffdfcf',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
