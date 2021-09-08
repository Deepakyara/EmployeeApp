import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator,DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home';
import Leaves from './components/Leaves';
import Attendance from './components/Attendance';
import SignIn from './components/SignIn';
import SalarySlip from './components/SalarySlip';


import {DrawerContent} from './components/Drawer'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
       <Drawer.Navigator initialRouteName="Home" drawerContent={props=><DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Leaves" component={Leaves}/>
        <Drawer.Screen name="Attendance" component={Attendance}/>
        <Drawer.Screen name="SalarySlip" component={SalarySlip}/>
      </Drawer.Navigator> 

  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen options={{headerShown:false}} name="SignIn" component={SignIn} />
        <Stack.Screen options={{headerShown:false}} name="Home" component={DrawerNav} />
      </Stack.Navigator>

      </NavigationContainer>

  );
}
export default App;
