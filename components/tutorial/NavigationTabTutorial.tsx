import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Setting from '../Setting';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function NavigationTabTutorial() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabelPosition: "beside-icon",
        tabBarShowLabel: true,
        tabBarActiveTintColor: "purple",
        tabBarLabel: "test",
        tabBarIcon: () => <Icon name="rocket" size={24} color="#900" />,
        tabBarBadge:3
      }} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  )
}

export default NavigationTabTutorial