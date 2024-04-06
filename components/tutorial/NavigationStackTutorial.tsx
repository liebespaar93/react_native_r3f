import React from 'react'

import { Pressable, Text } from 'react-native';

import Home from '../Home'
import About from '../About'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './NavigationTutorial';

const Stack = createNativeStackNavigator<RootStackParamList>()

function NavigationStackTutorial() {
  return (
    <Stack.Navigator initialRouteName='Home' >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='About' component={About} />
    </Stack.Navigator>
  )
}

export default NavigationStackTutorial