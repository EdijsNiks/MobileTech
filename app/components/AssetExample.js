import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Kalendars() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/f.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
  logo: {
    height: 240,
    width: 380,
  }
});
