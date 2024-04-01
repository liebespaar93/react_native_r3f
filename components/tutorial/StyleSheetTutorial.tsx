import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function StyleSheetTutorial() {
  return (
    <View style={styles.container}>
      <View style={[styles.darkMode]}>
        <Text style={[styles.darkModeText]}><Text style={[styles.BoldText]}>Style</Text>이 잘 적용됩니다</Text>
      </View>
      <View style={[styles.box, styles.lightblue, styles.boxShadow]}>
        <Text>Blue Box</Text>
      </View>
      <View style={[styles.box, styles.lightgreen, styles.androidShadow]}>
        <Text>Green Box</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  darkMode: {
    backgroundColor: 'black'
  },
  darkModeText: {
    color: "white"
  },
  BoldText: {
    fontWeight: "bold"
  },
  container: { flex: 1, backgroundColor: "plum", width: "100%" },
  box: {
    width: 100,
    height: 100,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
  },
  lightblue: {
    backgroundColor: 'lightblue',
  },
  lightgreen: {
    backgroundColor: 'lightgreen',
  },
  boxShadow: {
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.6,
    shadowRadius: 4
  },
  androidShadow: {
    elevation: 10,
  }
})

export default StyleSheetTutorial