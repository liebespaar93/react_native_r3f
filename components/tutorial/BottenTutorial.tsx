import React from 'react'
import { Button } from 'react-native'

function BottenTutorial() {
  return (
    <Button title="Press" color="midnightblue" onPress={()=>{console.log("button pressed")}} />
  )
}

export default BottenTutorial