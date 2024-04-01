import React from 'react'
import { Pressable } from 'react-native'

function PressableTutorial(props: React.PropsWithChildren) {
  return (
    <Pressable onPress={()=> {console.log("pressable pressed")}}>{props.children}</Pressable>
  )
}

export default PressableTutorial