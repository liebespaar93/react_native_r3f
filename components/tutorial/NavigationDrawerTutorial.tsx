import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboards from '../Dashboards';
import Setting from '../Setting';
import { RootStackParamList } from './NavigationTutorial';
import { View } from 'react-native';

const Drawer = createDrawerNavigator<RootStackParamList>();

function NavigationDrawerTutorial() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={Dashboards} options={{
        title: "My dashboard",
        drawerLabel: "Dashboard label",
        drawerActiveTintColor: "red",
        // drawerInactiveBackgroundColor: "pink",
        drawerContentStyle:{
          backgroundColor:"gray"
        },
        headerRight:()=>{
          return <View></View>
        }
      }}/>
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  )
}

export default NavigationDrawerTutorial