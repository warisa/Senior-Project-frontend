import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardSection from './CardSection';
import Card from './Card'
import { Container, Content,Header,Body,Title} from 'native-base';
import Axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export default class prayerTime extends Component {
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
        //Setting the value of the date time
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
            <Title>Prayer Time</Title>
          </Body>
        </Header>
        <Content>
          <View>
              <View style={{alignItems:'center',justifyContent:'center'}}>
                   <Text style={styles.fontStyle}>Date: {this.state.date}</Text>
                   </View>
                  { 
                    this.state.time.map( prayertime => 
                      <Card >
                       <View key={prayertime.prayerTimeId} >
                       <Text style={{margin:10,color:'black',fontSize:15}}>{prayertime.prayerType}</Text>
                          <CardSection >    
                              <View>
                              <Icon name="md-alarm" style={{color:'black',marginLeft:20}} size={30}/>
                                </View>
                                <View><Text style={{marginLeft:20,fontSize:20}}>{prayertime.prayerTime}</Text>
                                </View>
                          </CardSection>
                        </View>
                      </Card>
                      )
                  }        
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
          fontSize: 20,
        }
    });