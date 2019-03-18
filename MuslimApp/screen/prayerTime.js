import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class prayerTime extends Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={{color: 'white'}}> restaurant </Text>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
        container:{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor:'green'
        }
    });