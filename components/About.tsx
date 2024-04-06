import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Text, View } from 'react-native';
import { ProfileScreenNavigationProp } from './tutorial/NavigationTutorial';

function About() {
  const nav = useNavigation<ProfileScreenNavigationProp>();
  return (
    <View>
      <Text>HOME PAGE</Text>
      <Button title='Go to Home' onPress={()=> nav.navigate("Home")}/>
    </View>
  )
}

export default About