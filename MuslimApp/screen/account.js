import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Title, Button, Icon, Left, Right, Body } from "native-base";

export default class account extends Component {
  render() {
    return (
      <Container>
      <Header span style={styles.container}>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Header Span</Title>
        </Body>
        <Right />
      </Header>
    </Container>
      );
    }
  }
  
  const styles = StyleSheet.create({
      container:{
          // flex: 1,
          // justifyContent: 'center',
          // alignItems: 'center',
          backgroundColor:'#CC6600'
      }
  });
