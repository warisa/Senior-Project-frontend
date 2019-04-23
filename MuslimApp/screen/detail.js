import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import { ScrollView } from 'react-native-gesture-handler';
import {Button, Icon} from 'native-base';
import MapApp from '../component/MapApp';

export default class detail extends Component {
ss
  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('titleId');
    const artist = navigation.getParam('artist');
    const thumbnail = navigation.getParam('thumbnail');
    const image = navigation.getParam('image');
    return (
        <ScrollView>
        <Card>
          <Image source={{uri:'http://halalinthailand.com/wp-content/uploads/2016/03/IMG_2108.jpg'}}
                  style={{width: 410, height: 200}}/>
          <CardSection>
            <View >
              <View style={{borderRadius:30,backgroundColor:'#FFDAB9'}}>
                {/* <Image style={styles.thumbnailStyle} source={{ uri: thumbnail }}/> */}
                <Text style={{color:'black',fontSize:25,fontWeight:'bold'}}> Title: {JSON.stringify(title)}</Text>
              </View>
              </View>
            </CardSection>
            <CardSection>
                <View>
                    <Text style={{color:'black',marginBottom:10}}>I-MY SHABU ชาบูฮาลาล เสิร์ฟไม่อั้นในราคา 299 บาท</Text>
                    <ScrollView horizontal={true} style={{flexDirection:'row'}} 
                    showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                        <Image style={styles.image} source={{uri:'http://halalinthailand.com/wp-content/uploads/2016/03/IMG_2166.jpg'}} />
                        <Image style={styles.image} source=
                        {{uri:'https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.0-9/56523198_2294051060915296_4404012001634811904_o.jpg?_nc_cat=103&_nc_oc=AQmP1y9pnyScnbX5zFLNszuOISubil7YRsnpBxOiOSsDRIC0xQQi8IbqDcWsTo_r64UbFyldsoiVc7cmM3E6Icn-&_nc_ht=scontent.fbkk5-4.fna&oh=91ffd99b43b39f8e8115588257c86d2e&oe=5D3CFF81'}} />
                        <Image style={styles.image} source=
                        {{uri:'https://scontent.fbkk5-8.fna.fbcdn.net/v/t1.0-9/52875380_2263569720630097_7129378289516281856_o.jpg?_nc_cat=106&_nc_oc=AQm42IqQlnSumllxJ59qyjE7DhURN1ZBDGO_EGcWD6q6B3tMHU5Jc156fmcor8yeqQuZKa9L1QWi8Iz5KzHAkWMj&_nc_ht=scontent.fbkk5-8.fna&oh=f7be189819fde204e8dc2d9c4e944e75&oe=5D37FC9B'}}/>
                        <Image style={styles.image} source=
                        {{uri:'https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/52591424_2263569710630098_5790794479803826176_n.jpg?_nc_cat=105&_nc_oc=AQkSjkbw_sHk_ZrIRK_3biJxx7rVGjLAdUH3C0K8bKol8pqcklXfS95OH4tQPVg5vUwUAGGcyJeRVbWcVs7fnBGm&_nc_ht=scontent.fbkk5-3.fna&oh=7e1cb5767b01a73bbb987bdc7c6926c1&oe=5D4792E3'}}/>
                        <Image style={styles.image} source=
                        {{uri:'https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/52605737_2263569673963435_7779312184063950848_n.jpg?_nc_cat=105&_nc_oc=AQknrLX6xUOoGzRSt324fMIhd_69a3zHhJHsLMrwcMlfIsD4KthwumTEy-ZAft1iHsSD04yzXoS_Zl6MTSfsTwjQ&_nc_ht=scontent.fbkk5-3.fna&oh=3f6d8458d22a23d7019836613c1581af&oe=5D03F207'}}/>
                    </ScrollView>
                </View>  
            {/* <View style={styles.headerContentStyle}>
              <Text>Title: {JSON.stringify(title)}</Text>
              <Text>Artist: {JSON.stringify(artist)}</Text>
            </View> */}
            </CardSection>
            <CardSection>
              <View>
              <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>รายละเอียดร้าน:</Text>
              <Text style={styles.fontStyle}>เปิดให้บริการ: </Text>
              <Text style={styles.fontStyle}>เวลาให้บริการ: </Text>
              <Text style={styles.fontStyle}>ช่วงราคา: </Text>
              <Text style={styles.fontStyle}>เบอร์โทรศัพท์: </Text>
              <Text style={styles.fontStyle}>ที่อยู่ร้าน: </Text>
              </View>
              <View style={{marginTop:27}}>
                  <Text style={styles.fontStyle2}>เปิดให้บริการอยู่ในขณะนี้</Text>
                  <Text style={styles.fontStyle2}>15:00-22:00 น.</Text>
                  <Text style={styles.fontStyle2}>299-338</Text>
                  <Text style={styles.fontStyle2}>084-019-9924 </Text>
                  <Text style={styles.fontStyle2}>96/2 ประชาอุทิศ 54 แขวงบางมด เขตทุ่งครุ กรุงเทพมหานคร 10140 </Text>
              </View>
            {/* <Image style={styles.imageStyle} source={{ uri: image }}/> */}
            </CardSection>
            <MapApp/>
            <Text style={{color:'black',fontSize:17,fontWeight:'bold',marginTop:5}}>รายละเอียดร้านเพิ่มเติม</Text>
            <Card>
              <CardSection>
                <View style={{margin:10}}>
                  <Text style={styles.fontStyle2}> - ที่จอดรถ </Text>
                  <Text style={styles.fontStyle2}> - ห้องละหมาด </Text>
                </View>
                <View style={{margin:10}}>
                  <Text style={styles.fontStyle2}> - เครื่องปรับอากาศ </Text>
                  <Text style={styles.fontStyle2}> - รับบัตรเครดิต </Text>
                </View>
                <View style={{margin:10}}>
                  <Text style={styles.fontStyle2}> - จองล่วงหน้า </Text>
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