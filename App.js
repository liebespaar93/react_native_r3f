import { Button, Dimensions, Modal, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import BoxStyle from './components/BoxStyle';
import { useEffect, useState } from 'react';

export default function App() {
  const dimensions = useWindowDimensions();
  
  const windowWidth = dimensions.width;
  const windowHeight = dimensions.height;
  return (
    <View style={styles.container}>
      <View>
        <BoxStyle style={[styles.box, {
          width: windowWidth > 500 ? '50' : '20',
          height: windowHeight > 500 ? '50' : '20',
        }]}>
          <Text style={{ fontSize: windowWidth > 500 ? 50 : 24, }}>1c4c56</Text></BoxStyle>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#ffdfcf'
  },
  box: {
    // width: windowWidth > 500 ? '50' : '20',
    // height: windowHeight > 500 ? '50' : '20',
    backgroundColor: "#1c4c56",
    alignSelf: "flex-start"
  },
  text: {
    // fontSize: windowWidth > 500 ? 50 : 24,
  }
});

