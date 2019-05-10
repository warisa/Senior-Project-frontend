import React, { Component } from 'react';
import { View, Text, StyleSheet , TouchableHighlight, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Axios from 'axios';
import { Item,Icon,Input } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class prayerPlace extends Component {
  constructor(){
    super()
      this.state = { //ประกาศตัวแปรใน this.state นอกstate = ค่าคงที่
        place2: [],
      }
    }
    componentWillMount() {
      Axios.get('http://10.4.56.94/prayerplace')
      .then(response => this.setState({ place2: response.data }))
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
                      this.state.place2.map( prayerplace => 
                        <Card>
                         <View key={prayerplace.placeId} style={{ marginTop:10,width:'100%'}}>
                            <CardSection>
                             <View >
                                <TouchableHighlight onPress={() => this.props.navigation.navigate('prayerDetail',{placeId:prayerplace.placeId})}>
                                {/* ,
                                  {titleId: taylor2.title,artist:taylor2.artist,thumbnail: taylor2.thumbnail_image,image: taylor2.image})}> */}
                                   <Image source={{uri: prayerplace.imageName}} style={{width: 150, height: 100, margin: 7}}></Image>
                                </TouchableHighlight>
                              </View>
                             <View style={styles.container}>
                                <Text style={{color:'black'}}>{prayerplace.placeName}</Text>
                                {/* <Text style={{color:'black'}}>เวลาเปิด: - </Text>
                                <Text style={{color:'black'}}>เวลาปิด: - </Text> */}
                                <Text style={{color:'black'}}>Telno : {prayerplace.placeTelno}</Text>
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
          marginLeft: 20,
          flex: 1,
          width:'100%'
      }
  });
