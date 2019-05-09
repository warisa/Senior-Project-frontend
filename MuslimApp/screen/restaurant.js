import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Axios from 'axios';
import { Content,Item,Icon,Input } from 'native-base';
import Card from './Card';
import CardSection from './CardSection';
import { ScrollView } from 'react-native-gesture-handler';

export default class restaurant extends Component {

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={{color: 'white'}}> restaurant </Text>
//       </View>
//     );
//   }
// }
constructor(){
  super()
    this.state = { //ประกาศตัวแปรใน this.state นอกstate = ค่าคงที่
      place: [],
    }
  }
  componentWillMount() {
    Axios.get('http://10.4.56.94/restaurant')
    .then(response => this.setState({ place: response.data }))
  }

  render() {
    return (
      <View>   
        <Item>
         <Icon name="ios-search" />
        <Input placeholder="Search" />
       </Item>   
            <ScrollView>
                  { 
                    this.state.place.map( restaurant => 
                      <Card >
                       <View key={restaurant.placeId} >
                          <CardSection >
                           <View>
                              <TouchableHighlight onPress={() => this.props.navigation.navigate('detail')}>
                              
                                 {/* {titleId: taylor2.title,artist:taylor2.artist,thumbnail: taylor2.thumbnail_image,image: taylor2.image})} */}
                                
                                 <Image source={{uri: restaurant.imageName}} style={{width:150,height: 100, margin: 7}}></Image>
                              </TouchableHighlight>
                            </View>
                           <View style={styles.container}>
                           <Text style={{color:'black'}}>{restaurant.placeName}</Text>
                              <Text style={{color:'black'}}>Open: {restaurant.placeOpeningTime}</Text>
                              <Text style={{color:'black'}}>Close: {restaurant.placeClosingTime}</Text>
                              <Text style={{color:'black'}}>Telno: {restaurant.placeTelno}</Text>
                            </View>
                          </CardSection>
                        </View>
                      </Card>
                      )
                  }        
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-around',
        flexDirection:'column',
        marginLeft: 10,
        flex: 1,
        width: '100%'
    }
});
