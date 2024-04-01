import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ViewTutorial from './components/tutorial/ViewTutorial';
import TextTutorial from './components/tutorial/TextTutorial';
import ImageTutorial from './components/tutorial/ImageTutorial';
import ScrollViewTutorial from './components/tutorial/ScrollViewTutorial';
import InfoApp from './components/InfoApp';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{height:20, width:"auto", backgroundColor:"plum"}} >
        <TextTutorial>
          타이틀
        </TextTutorial>
      </View>
      <ScrollViewTutorial>
        <ViewTutorial backgroundColor='lightblue'>
          <ImageTutorial></ImageTutorial>
          <InfoApp></InfoApp>
        </ViewTutorial>
      </ScrollViewTutorial>
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
