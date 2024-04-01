import React from 'react'
import { ActivityIndicator, View } from 'react-native'

function ActivityIndicatorTutorial() {
  return (
    <View>
      <ActivityIndicator />
      <ActivityIndicator size='large' />
      <ActivityIndicator size='large' color="yellow" />
      <ActivityIndicator size='large' color="midnightblue" animating={true} />
      <ActivityIndicator size='large' color="midnightblue" animating={false} />
    </View>
  )
}

export default ActivityIndicatorTutorial