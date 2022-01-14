import React, { Component } from 'react';
import { Text, StatusBar, TextInput, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  state = {
    name: '',
     name2: '',
     name3: '',
     name4: '',
    
   
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.description}>
            Here you can write your shopping list, so your shopping is easy and fast!
          </Text>
        </View>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
          ref={(ref) => {
            this._nameInput = ref;
          }}
          placeholder="Name"
          autoFocus={true}
          autoCapitalize="words"
          autoCorrect={true}
          keyboardType="default"
          returnKeyType="next"
          onSubmitEditing={this._next}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.input}
          value={this.state.name2}
          onChangeText={(name2) => this.setState({ name2 })}
          ref={(ref) => {
            this._nameInput = ref;
          }}
          placeholder="Name"
          autoFocus={true}
          autoCapitalize="words"
          autoCorrect={true}
          keyboardType="default"
          returnKeyType="next"
          onSubmitEditing={this._next}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.input}
          value={this.state.name3}
          onChangeText={(name3) => this.setState({ name3 })}
          ref={(ref) => {
            this._nameInput = ref;
          }}
          placeholder="Name"
          autoFocus={true}
          autoCapitalize="words"
          autoCorrect={true}
          keyboardType="default"
          returnKeyType="next"
          onSubmitEditing={this._next}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.input}
          value={this.state.name4}
          onChangeText={(name4) => this.setState({ name4 })}
          ref={(ref) => {
            this._nameInput = ref;
          }}
          placeholder="Name"
          autoFocus={true}
          autoCapitalize="words"
          autoCorrect={true}
          keyboardType="default"
          returnKeyType="next"
          onSubmitEditing={this._next}
          blurOnSubmit={false}
        />
      </View>
    );
  }

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
