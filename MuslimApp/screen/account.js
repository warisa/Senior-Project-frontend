import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Container, Header, Title, Button, Icon, Left, Right, Body, Content } from "native-base";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class account extends Component {
  render() {
    return (
  
      <View style={styles.container}>
        <Body>
            <Image source={require('../image/Halal.png')} style={{width:'100%',height:150}} />
            <Button block style={{marginTop:60}}>
              <Text style={{color:'white',marginLeft:10}}>Login with facebook  </Text>
            </Button>
        </Body>
      {/* <Header span style={styles.container}>
        <Left>
          
        </Left>
        <Body>
          <FontAwesome name='user-circle-o' style={{color:'white'}} size={30}/>
        </Body>
        <Right>
        <Button bordered style={{marginTop:60}}>
                  <Text style={{color:'white',marginLeft:10}}>Log in facebook</Text>
                </Button>
        </Right>
      </Header> */}
    </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
      container:{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:'#CC6600'
      }
  });
