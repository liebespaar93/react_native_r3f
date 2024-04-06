import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { ProfileScreenNavigationProp } from './tutorial/NavigationTutorial';

function Home() {
  const nav = useNavigation<ProfileScreenNavigationProp>();
  return (
    <View>
      <Text>HOME PAGE</Text>
      <Button title='Go to About' onPress={() => nav.navigate("About", { userId: "userid" })} />
    </View>
  )
}

export default Home