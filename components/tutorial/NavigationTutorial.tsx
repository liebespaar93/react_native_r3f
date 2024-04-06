import 'react-native-gesture-handler';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import NavigationDrawerTutorial from './NavigationDrawerTutorial';
import NavigationStackTutorial from './NavigationStackTutorial';
import NavigationTabTutorial from './NavigationTabTutorial';

export type RootStackParamList = {
  Home: undefined;
  About: { userId: string };
  Dashboard: { userId: string };
  Setting: { sort: 'latest' | 'top' } | undefined;
};

export type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList
>;

function NavigationTutorial() {
  return (
    <NavigationContainer>
      {/* <NavigationDrawerTutorial /> */}
      {/* <NavigationStackTutorial /> */}
      <NavigationTabTutorial />
    </NavigationContainer>
  )
}

export default NavigationTutorial