import React from 'react'
import { Button } from 'react-native'

function ButtonTutorial() {
  return (
    <Button title="Press" color="midnightblue" onPress={()=>{console.log("button pressed")}} />
  )
}

export default ButtonTutorial