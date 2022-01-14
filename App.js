import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Appbar } from 'react-native-paper';
function CustomNavigationBar({ navigation, back }) {
  return (
    <Appbar.Header>
     {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Date expiration app" />
    </Appbar.Header>
  );
}



const Stack = createNativeStackNavigator();

import HomeScreen from './components/Home';
import Secondscreen from './components/Secondscreen';
import Third_screen from './components/Third_screen';

export default function App() {
  return (
 <NavigationContainer>
 <Stack.Navigator initialRouteName="Home"
   
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}
 >

        <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Add product" component={Secondscreen} />
          <Stack.Screen name="Shopping list" component={Third_screen} />
      </Stack.Navigator>
      </NavigationContainer>   
 );
}
