import { Button, Dimensions, Modal, SafeAreaView, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import BoxStyle from './components/BoxStyle';
import { useEffect, useState } from 'react';

export default function App() {
  const dimensions = useWindowDimensions();

  const windowWidth = dimensions.width;
  const windowHeight = dimensions.height;
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View>
          <BoxStyle style={[styles.box, {
            width: windowWidth > 500 ? '50' : '20',
            height: windowHeight > 500 ? '50' : '20',
          }]}>
            <Text style={{ fontSize: windowWidth > 500 ? 50 : 24, }}>1c4c56</Text></BoxStyle>
        </View>
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
    backgroundColor: '#ffdfcf'
  },
  box: {
    backgroundColor: "#1c4c56",
    alignSelf: "flex-start"
  },
  text: {
  }
});
