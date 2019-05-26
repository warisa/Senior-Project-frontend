import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import { ScrollView } from 'react-native-gesture-handler';
import {Button, Icon,Header,Left,Right,Body, Container,Title} from 'native-base';
import MapApp from '../component/MapApp';
import Axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

export default class restaurantDetail extends Component {

  constructor(props){
    super(props)
      this.state = { //ประกาศตัวแปรใน this.state นอกstate = ค่าคงที่
        place: [],
        image:[],
        placeId: props.navigation.getParam('placeId')
      }
    }

  componentWillMount() {
    Axios.get('http://10.4.56.94/restaurant/'+ this.state.placeId)
    .then(response => this.setState({ place: response.data[0], image: response.data }))
  }

  render() {
    // const { navigation } = this.props;
    // const placeId = navigation.getParam('placeId');
    // const Name = navigation.getParam('placeName');
    return (
      <Container>
      {/* <Header span>
          <Left>
            <Button transparent >
              <Icon name="arrow-back"  onPress={() => this.props.navigation.goBack()}/>
            </Button>
          </Left>
          <Body>
            <Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>{JSON.stringify(Name)}</Text>
          </Body>
          <Right />
        </Header> */}
        <ScrollView>
        <Card>
          <Image source={{uri:this.state.place.imageName}}
                  style={{width: '100%', height: 200}}/>
          <CardSection>
            <View >
              <View style={{borderRadius:30,backgroundColor:'#FFDAB9'}}>
                <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}> Title: {this.state.place.placeName}</Text>
              </View>
                  {/* <ScrollView horizontal={true} style={{flexDirection:'row'}} 
                    showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                         {
                            this.state.image.map( image => 
                            <View key={image.imageId} style={{alignItems: 'center', marginTop:10, width:130,height:150}}>
                                  <Image source={{uri: image.imageName}} style={{width: 120, height: 100, margin: 7}} />
                            </View>
                            )
                          }      
                  </ScrollView> */}
              </View>
            </CardSection>
            <CardSection>
                <View>
                    <Text style={{color:'black',marginBottom:10}}>{this.state.place.placeDescription}</Text>
                    <ScrollView horizontal={true} style={{flexDirection:'row'}} 
                    showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                         {
                            this.state.image.map( image => 
                            <View key={image.imageId} style={{alignItems: 'center', marginTop:10, width:130,height:150}}>
                                  <Image source={{uri: image.imageName}} style={{width: 120, height: 100, margin: 7}} />
                            </View>
                            )
                          }      
                  </ScrollView>
                </View>  
            </CardSection>
            <CardSection>
              <View>
              <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>รายละเอียดร้าน:</Text>
              <Text style={styles.fontStyle}>เปิดให้บริการ: </Text>
              <Text style={styles.fontStyle}>เวลาให้บริการ: </Text>
              <Text style={styles.fontStyle}>ช่วงราคา: </Text>
              <Text style={styles.fontStyle}>เบอร์โทรศัพท์: </Text>
              <Text style={styles.fontStyle}>ที่อยู่ของร้าน: </Text>
              <Text style={styles.fontStyle}>เพจของร้าน: </Text>
              </View>
              <View style={{marginTop:35,flex:1,width:'100%'}}>
                  <Text style={styles.fontStyle2}>เปิดให้บริการอยู่ในขณะนี้</Text>
                  <Text style={styles.fontStyle2}>{this.state.place.placeOpeningTime}-{this.state.place.placeClosingTime}</Text>
                  <Text style={styles.fontStyle2}>{this.state.place.placePriceRange}</Text>
                  <Text style={styles.fontStyle2}>{this.state.place.placeTelno}</Text>
                  <Text style={styles.fontStyle2}>{this.state.place.placeAddress}</Text>
                  <Text style={styles.fontStyle2}>{this.state.place.placeLinkPage}</Text>
              </View>
            {/* <Image style={styles.imageStyle} source={{ uri: image }}/> */}
            </CardSection>
            <MapApp 
              placeName={this.state.place.placeName}
              latitude={this.state.place.latitude} 
              longitude={this.state.place.longtitude}
            />
            <Text style={{color:'black',fontSize:17,fontWeight:'bold',marginTop:5}}>รายละเอียดร้านเพิ่มเติม</Text>
            <Card>
              <CardSection>
                <View style={{margin:10}}>
                {
                  this.state.place.placeCarParking == 1 ?
                  (
                    <CardSection>
                      <AntDesign name="checkcircleo" style={{color:'green'}} size={20}/>
                      <Text style={styles.fontStyle3}>ที่จอดรถ </Text>
                    </CardSection>
                  )
                  :
                  (
                    <CardSection>
                      <Feather name="x-circle" style={{color:'red'}} size={20}/>
                      <Text style={styles.fontStyle4}>ที่จอดรถ </Text>
                    </CardSection>
                  )
                }

                {
                  this.state.place.placePrayerRoom == 1 ?
                  (
                    <CardSection>
                      <AntDesign name="checkcircleo" style={{color:'green'}} size={19}/>
                      <Text style={styles.fontStyle3}>ห้องละหมาด</Text>
                    </CardSection>
                  )
                  :
                  (
                    <CardSection>
                      <Feather name="x-circle" style={{color:'red'}} size={20}/>
                      <Text style={styles.fontStyle4}>ห้องละหมาด</Text>
                    </CardSection>
                  )
                }
                </View>
                <View style={{margin:10}}>
                 {
                  this.state.place.placeAirconditioner == 1 ?
                  (
                    <CardSection>
                      <AntDesign name="checkcircleo" style={{color:'green'}} size={19}/>
                      <Text style={styles.fontStyle3}>เครื่องปรับอากาศ </Text>
                    </CardSection>
                  )
                  :
                  (
                    <CardSection>
                      <Feather name="x-circle" style={{color:'red'}} size={20}/>
                      <Text style={styles.fontStyle4}>เครื่องปรับอากาศ </Text>
                    </CardSection>
                  )
                }
                {
                  this.state.place.placeCreditCard == 1 ?
                  (
                    <CardSection>
                      <AntDesign name="checkcircleo" style={{color:'green'}} size={19}/>
                      <Text style={styles.fontStyle3}> - รับบัตรเครดิต </Text>
                    </CardSection>
                  )
                  :
                  (
                    <CardSection>
                      <Feather name="x-circle" style={{color:'red'}} size={20}/>
                      <Text style={styles.fontStyle4}>รับบัตรเครดิต </Text>
                    </CardSection>
                  )
                }
                </View>
                <View style={{margin:10}}>
                {
                  this.state.place.placeReserve == 1 ?
                  (
                    <CardSection>
                      <AntDesign name="checkcircleo" style={{color:'green'}} size={19}/>
                      <Text style={styles.fontStyle3}>จองล่วงหน้า </Text>
                    </CardSection>
                  )
                  :
                  (
                    <CardSection>
                      <Feather name="x-circle" style={{color:'red'}} size={20}/>
                      <Text style={styles.fontStyle4}>จองล่วงหน้า </Text>
                    </CardSection>
                  )
                }
                </View>
              </CardSection>
            </Card>
            <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
            <Button style={[styles.buttonContainer, styles.reviewButton]}  onPress={() => this.props.navigation.navigate('review')}>
                <Text>Review</Text>
            </Button>
            </View>
        </Card>
        </ScrollView>
        </Container>
    );
  }
}
const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 10
  },
  thumbnailStyle: {
    height: 90,
    width: 90
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  fontStyle: {
    color:'black',
    fontSize:15,
    fontWeight:'bold',
    marginTop: 10,
  },
  fontStyle2:{
    marginTop: 10,
    color: 'black',
    fontSize: 12
  },
  fontStyle3:{
    marginTop: 10,
    color: 'green',
    fontSize: 12
  },
  fontStyle4:{
    marginTop: 10,
    color: 'red',
    fontSize: 12
  },
  image:{
    width:100,
    height:100,
    marginRight: 10,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin:20,
    width:100,
    borderRadius:30,
  },
  reviewButton: {
    backgroundColor: '#CC6600',
  }
};