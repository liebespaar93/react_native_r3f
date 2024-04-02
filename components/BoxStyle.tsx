import React from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'

type BoxStyleProps = {
  style : ViewStyle
} & React.PropsWithChildren

function BoxStyle(props : BoxStyleProps ) {

  return (
    <View style={[styles.box, props.style]}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box : {
    backgroundColor: 'black',
    padding:20,
    margin:2,
    minWidth:240,
    borderRadius:30
  },
  text:{
    fontSize:24,
    fontWeight:"bold",
    textAlign:"center",
    color:"white"
  }
})

export default BoxStyle