import React from 'react'
import { Image } from 'react-native'
import adaptive from '@/assets/adaptive-icon.png'

const adaptive_icon = require("../../assets/adaptive-icon.png")

function ImageTutorial() {
  return (
    <Image
      source={{ uri: "https://picsum.photos/300" }}
      style={{ width: 300, height: 300, margin:10 }}>
    </Image>
  )
}

export default ImageTutorial