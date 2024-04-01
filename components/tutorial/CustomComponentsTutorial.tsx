import React from 'react'
import { Alert, Button, ScrollView, Text, View } from 'react-native'
import AlertTutoriai from './AlertTutoriai'
import InfoApp from '../InfoApp'

function CustomComponentsTutorial() {
  return (
    <View>
      <View style={{backgroundColor:"green", margin:30}}>
        <Text>여기는 커스텀한 컴포넌트 입니다</Text>
      </View>
      <Button title="Alert" onPress={() => { Alert.alert("Alert!! 🥳") }} />
      <ScrollView style={{ backgroundColor: "orange" }}>
        <InfoApp />
      </ScrollView>
    </View>
  )
}

export default CustomComponentsTutorial