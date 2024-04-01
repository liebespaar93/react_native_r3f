import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function StyleSheetTutorial() {
  return (
    <View style={styles.container}>
      <Text>Style이 잘 적용됩니다</Text>
      <View style={[styles.box, styles.lightblue]}>
        <Text>Blue Box</Text>
      </View>
      <View style={[styles.box, styles.lightgreen]}>
        <Text>Green Box</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", width: "100%" },
  box: {
    width: 100,
    height: 100,
    padding: 10,
  },
  lightblue: {
    backgroundColor: 'lightblue',
  },
  lightgreen: {
    backgroundColor: 'lightgreen',
  }
})

export default StyleSheetTutorial