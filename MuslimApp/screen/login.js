import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Container, Title, Button, Icon, Left, Right, Body, Content } from "native-base";
import Entypo from 'react-native-vector-icons/Entypo';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

export default class login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Body style={styles.logo}>
            <Image style={{width:250,height:250,marginBottom:20}} source={require('../image/app_logo.png')}/>
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
    </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
      container:{
          flex: 1,
          backgroundColor:'#FF8200'
      },
      logo:{
        flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
      }
  });
