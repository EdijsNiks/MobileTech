import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


  




const Stack = createNativeStackNavigator();

import HomeScreen from './components/Home';
import Secondscreen from './components/ListView';


export default function App() {
  return (
 <NavigationContainer>
 <Stack.Navigator initialRouteName="Home"
   
        
       
 >

        <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="List View" component={Secondscreen} />
        
      </Stack.Navigator>
      </NavigationContainer>   
 );
}
