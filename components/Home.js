import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';


import AssetExample from './AssetExample';


import { Card } from 'react-native-paper';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
       Expiration date tracker
      </Text>
      <Card>
        <AssetExample />
      </Card>
      <Button title="Add or delete products" onPress={
        () => { navigation.navigate("Add product") }
      }> </Button>
<Text style={styles.paragraph2}>
       or
      </Text>
      
      <Button title="Shopping list" onPress={
        () => { navigation.navigate("Shopping list") } 
      
      }> </Button>

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
