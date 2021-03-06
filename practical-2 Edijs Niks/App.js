import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


import AssetExample from './components/AssetExample';


import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
       <Card>
        <AssetExample />
      </Card>
      <Text style={styles.paragraph}>
        Hello world!
        
        Hello World from Group 9: Edijs Niks Eglitis! 
        This is my --Edijs Niks Eglītis -- first React Native application!

      </Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
