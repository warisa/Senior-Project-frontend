import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Container, Title, Button, Icon, Left, Right, Body, Content } from "native-base";
import Entypo from 'react-native-vector-icons/Entypo';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

export default class login extends Component {
  render() {
    return (

      <View style={styles.container}>
        <Body>
            <Image source={require('../image/Halal.png')}/>
            <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
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
          backgroundColor:'#FF8200'
      }
  });
