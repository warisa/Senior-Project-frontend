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
      albums1: [],
    }
  }
  componentWillMount() {
    Axios.get('http://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums1: response.data }))
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
                    this.state.albums1.map( taylor2 => 
                      <Card>
                       <View key={taylor2.title} style={{ marginTop:10}}>
                          <CardSection>
                           <View>
                              <TouchableHighlight onPress={() => this.props.navigation.navigate('detail',
                                {titleId: taylor2.title,artist:taylor2.artist,thumbnail: taylor2.thumbnail_image,image: taylor2.image})}>
                                 <Image source={{uri: taylor2.image}} style={{width: 100, height: 100, margin: 7}}></Image>
                              </TouchableHighlight>
                            </View>
                           <View style={styles.container}>
                              <Text style={{color:'black'}}>{taylor2.title}</Text>
                              <Text style={{color:'red'}}>เวลาเปิด: 15:00 น.</Text>
                              <Text style={{color:'red'}}>เวลาปิด: 22:00 น.</Text>
                              <Text style={{color:'black'}}>เบอร์โทรศัพท์ : 084-019-9924</Text>
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
        marginLeft: 20
    }
});
