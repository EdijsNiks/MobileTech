import React, { Component } from 'react';
import { Text, StatusBar, TextInput, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { useState } from 'react';
import PropTypes from 'prop-types';
 

 function Input(props) {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.textInputLabel}>{props.label}</Text>
      <TextInput style={styles.textInput} {...props} />
    </View>
  );
}
Input.propTypes = {
  label: PropTypes.string.isRequired
}

export default class App extends Component {
  
  state = {
    name: '',
    date: '',
    name2: '',
    date2: '',
    name3: '',
    date3: '',
   

  };
  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.description}>
            Here you can add the products and their expiration dates!
            Dont forget to check them daily, because this app is still in development so the notifications are not yet included :) Also only 3 spots available to put the product and date but if demand is there the size will be increased!
          </Text>
        </View>
        <Input
          style={styles.input}
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
          ref={(ref) => {
            this._nameInput = ref;
          }}
          placeholder="Product/s name"
          autoFocus={true}
          autoCapitalize="words"
          autoCorrect={true}
          keyboardType="default"
          returnKeyType="next"
          onSubmitEditing={this._next}
          blurOnSubmit={false}
        />
        <Input
          style={styles.input}
          value={this.state.date}
          onChangeText={(date) => this.setState({ date })}
          ref={(ref) => {
            this._dateInput = ref;
          }}
          placeholder="date"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="date"
          returnKeyType="send"
          onSubmitEditing={this._submit}
          blurOnSubmit={true}
        />
        <Input
          style={styles.input}
          value={this.state.name2}
          onChangeText={(name2) => this.setState({ name2 })}
          ref={(ref) => {
            this._nameInput = ref;
          }}
          placeholder="Product/s name"
          autoFocus={true}
          autoCapitalize="words"
          autoCorrect={true}
          keyboardType="default"
          returnKeyType="next"
          onSubmitEditing={this._next}
          blurOnSubmit={false}
        />
        <Input
          style={styles.input}
          value={this.state.date2}
          onChangeText={(date2) => this.setState({ date2 })}
          ref={(ref) => {
            this._dateInput = ref;
          }}
          placeholder="date"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="date"
          returnKeyType="send"
          onSubmitEditing={this._submit}
          blurOnSubmit={true}
        />
        <Input
          style={styles.input}
          value={this.state.name3}
          onChangeText={(name3) => this.setState({ name3 })}
          ref={(ref) => {
            this._nameInput = ref;
          }}
          placeholder="Product/s name"
          autoFocus={true}
          autoCapitalize="words"
          autoCorrect={true}
          keyboardType="default"
          returnKeyType="next"
          onSubmitEditing={this._next}
          blurOnSubmit={false}
        />
        <Input
          style={styles.input}
          value={this.state.date3}
          onChangeText={(date3) => this.setState({ date3 })}
          ref={(ref) => {
            this._dateInput = ref;
          }}
          placeholder="date"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="date"
          returnKeyType="send"
          onSubmitEditing={this._submit}
          blurOnSubmit={true}
        />
        
      </View>
    );
  }

  _next = () => {
    this._dateInput && this._dateInput.focus();
  };

  _submit = () => {
    alert(
      ` Your product/s has been added!`
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  header: {
   
    padding: 20,
    backgroundColor: '#ADD8E6',
  },
  description: {
    fontSize: 14,
    color: 'white',
  },
  input: {
    margin: 20,
    marginBottom: 0,
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
});
