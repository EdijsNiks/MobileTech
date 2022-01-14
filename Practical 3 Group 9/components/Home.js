import React, {Component} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import { useState } from 'react';



export default function Home({navigation}) {
  
  const [counter, setCounter] = useState(0);
   
  

  
  return (
    <View style={styles.container}>
      
      <Text style={styles.paragraph}>
     
      </Text>
      <Card>
        
      </Card>
      <Text style={{marginBottom: 20}}> Counter value: {counter}</Text>
      <Button title="List View" onPress={
        () => { navigation.navigate("List View") }
      }> </Button>
<Text style={styles.paragraph2}>
      </Text>
      <Button title='Increase Counter'
        onPress={() => {
          setCounter(counter+1);
        }}
      />
      <Text style={styles.paragraph2}>
      </Text>
      <Button title='Decrease Counter'
        onPress={() => {
          setCounter(counter-1);
        }}
      />
      
      

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
    margin: 34,
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph2: {
    margin: 4,
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
