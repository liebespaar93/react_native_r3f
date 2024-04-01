import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function StyleSheetTutorial() {
  return (
    <View style={styles.container}>
        <Text>Style이 잘 적용됩니다</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor:"plum", width:"100%" }
})

export default StyleSheetTutorial