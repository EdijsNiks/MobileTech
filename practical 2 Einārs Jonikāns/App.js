import React from 'react';
import {Image, Text, View } from 'react-native';
import image from './assets/snack-icon.png'; 

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      
      <Text>Hello world from Group 9</Text> 
      <Text>Member: Einars Jonikans!</Text>
      <Text>This is my Einars Jonikans</Text>
      <Text> first React Native application!</Text>
      <Image source={image} style={{ width: 126, height: 126 }} /> 
    </View>
  )
}
export default HelloWorldApp;