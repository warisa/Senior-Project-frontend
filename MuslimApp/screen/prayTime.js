import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Header, Title, List, ListItem, Left, Body, Right, Switch} from 'native-base';
import Axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';

export default class prayTime extends Component {
  constructor(){
    super()
      this.state = { //ประกาศตัวแปรใน this.state นอกstate = ค่าคงที่
        timeToDay: '',
        time: [],
      }
    }

    componentDidMount() {
      var that = this;
      var date = new Date().getDate(); //Current Date
      var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year
      that.setState({
        date:
          date + '/' + month + '/' + year,
      });
    }

    componentWillMount() {
      Axios.get('http://10.4.56.94/prayertime')
      .then(response => this.setState({ time: response.data }))
    }

    render() {
          return (
            <Container>
            <Header style={{backgroundColor: '#CC6600'}}>
            <Body>
              <Title>Pray Time</Title>
            </Body>
          </Header>
          <Content>
            <View>
              <View style={{alignItems:'center',justifyContent:'center'}}>
                <ListItem>
                  <IconEntypo name="calendar" style={{color:'black',marginRight:10}} size={30}/>
                  <Text style={styles.fontStyle}>{this.state.date}</Text>
                </ListItem>
              </View>
              <Content>
                <List>
                    { 
                      this.state.time.map( praytime => 
                        <ListItem key={praytime.prayerTimeId} thumbnail>
                          <Left>
                            <Icon name="md-alarm" style={{color:'black'}} size={30}/>
                          </Left>
                          <Body>
                            <Text style={{color:'black',fontSize:25}}>{praytime.prayerTime}</Text>
                            <Text style={{fontSize:20}}>{praytime.prayerType}</Text>
                          </Body>
                          <Right>
                            <Switch value={false}/>
                          </Right>
                        </ListItem>
                        )
                    }
                </List> 
              </Content> 
            </View>
              </Content>
              </Container>
          );
        }
      }
      
      const styles = StyleSheet.create({
          container:{
              margin : 10
          },
          card:{
            marginTop:10
          },
          fontStyle:{
            fontSize: 25,
            color: 'black'
          }
      });