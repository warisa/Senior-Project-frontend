import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import restaurant from './screen/restaurant';
import prayerPlace from './screen/prayerPlace';
import prayerTime from './screen/prayerTime';
import account from './screen/account';
import {createBottomTabNavigator,createAppContainer, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import showAllRestaurant from './screen/showAllRestaurant';
import { Button, Content } from 'native-base';
import detail from './screen/detail';
import review from './screen/review';
import Axios from 'axios';



class App extends Component {
  constructor(){
    super()
      this.state = { //ประกาศตัวแปรใน this.state นอกstate = ค่าคงที่
        albums: []
      }
    }
    
  componentWillMount() {
    this.setState({ test : 'nut'})
    Axios.get('http://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }))
  }

  render() {
    return (
      <Content>
        <View>
          <Image source={require('./image/Imageforlogo.png')} style={{width: 430, height: 180}} />
              <TouchableHighlight onPress={() => this.props.navigation.navigate('ShowAll')}>
                <Text style={{marginTop:10,fontSize:15, color:'black'}}>Restaurant</Text>
              </TouchableHighlight>
            <View style={{flex: 1, flexDirection: 'row'}}>
                  {
                    this.state.albums.map( taylor => 
                    <View key={taylor.title} style={{alignItems: 'center', marginTop:10}}>
                          <TouchableHighlight onPress={() => this.props.navigation.navigate('detail',
                          {titleId: taylor.title,artist:taylor.artist,thumbnail: taylor.thumbnail_image,image: taylor.image})}>
                          <Image source={{uri: taylor.image}} style={{width: 100, height: 100, margin: 7}} />
                          </TouchableHighlight>
                      <Text>{taylor.title}</Text>
                    </View>
                      )
                  }
            </View>
         </View>
      </Content>
    );
  }
}
const StackNavigator = createStackNavigator(
  {
    Navigate:{ screen: App,
     navigationOptions:{
       title:"Home"
     }},
    ShowAll:{ screen: restaurant,
      navigationOptions:{
        title:"All restaurant"
      }},
    detail:{ screen: detail,
      navigationOptions:{
        title:"Detail"
      }}
  },
  {
    initialRouteName : 'Navigate',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#CC6600',
      },
      headerTintColor: '#fff',
      headerTitleStyle: { 
        flex:1,
        textAlign: 'center',
        alignSelf: 'center' 
      },
      headerRight: (<View />)
    },
  }
);
const StackNavigator2 = createStackNavigator(
  {
    Navigate2:{ screen: restaurant,
     navigationOptions:{
       title:"Restaurant"
     }},
     detail:{ screen: detail,
      navigationOptions:{
        title:"Detail"
      }},
      review:{ screen: review,
        navigationOptions:{
          title:"Review"
      }}
  },
  {
    initialRouteName : 'Navigate2',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#CC6600',
      },
      headerTintColor: '#fff',
      headerTitleStyle: { 
        flex:1,
        textAlign: 'center',
        alignSelf: 'center' 
      },
      headerRight: (<View />)
    },
  }
);
const TabNavigator = createBottomTabNavigator(
  {
    Home: {screen: StackNavigator,
      navigationOptions:{
      tabBarIcon:()=>(
        <Icon name="ios-home" style={{color:'white'}} size={30}/>
      )
    }
  },
    Restaurant:{screen: StackNavigator2,
      navigationOptions:{
        tabBarIcon:()=>(
          <Icon name="md-restaurant" style={{color:'white'}} size={30}/>
        )
      }
    },
    PrayerPlace:{screen: prayerPlace,
      navigationOptions:{
        tabBarIcon:()=>(
          <Icons name="home-map-marker" style={{color:'white'}} size={30}/>
        )
      }
    },
    PrayerTime:{screen: prayerTime,
      navigationOptions:{
        tabBarIcon:()=>(
          <Icon name="ios-alarm" style={{color:'white'}} size={30}/>
        )
      }
    },
    Account:{screen: account,
      navigationOptions:{
        tabBarIcon:()=>(
          <Icon name="ios-contact" style={{color:'white'}} size={30}/>
        )
      }
    },
  },
  {
    tabBarOptions: {
      style: {
           height:60,
          backgroundColor: '#CC6600',
          padding: 8,
      },
       indicatorStyle: {
          borderBottomColor: '#ffffff',
          borderBottomWidth: 3,
      },
      tabStyle: {
          borderColor: '#CC6600',
          borderRightWidth: 1,
      },
      labelStyle: {
        fontSize: 12,
         marginTop: 0,
         color :'#ffffff'
      },
    }
  },
    {
      initialRouteName : 'Home'
    }
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'orange'
  },
}
);
export default createAppContainer(TabNavigator);