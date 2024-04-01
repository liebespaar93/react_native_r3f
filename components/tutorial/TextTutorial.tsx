import React from "react"
import { Text } from "react-native"

export default function TextTutorial(props: React.PropsWithChildren) {
  return (
    <Text>
      {props.children}
    </Text>
  )
}