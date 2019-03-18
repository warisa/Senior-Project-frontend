import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class account extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={{color: 'white'}}> Account </Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
      container:{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:'yellow'
      }
  });
