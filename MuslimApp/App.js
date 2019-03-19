import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import restaurant from './screen/restaurant';
import prayerPlace from './screen/prayerPlace';
import prayerTime from './screen/prayerTime';
import account from './screen/account';
import {createBottomTabNavigator,createAppContainer, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import showAllRestaurant from './screen/showAllRestaurant';
import { Button } from 'native-base';
import detail from './screen/detail';


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to my Application!</Text>
        <Button onPress={() => this.props.navigation.navigate('ShowAll')}>
          <Text>View All</Text>
          </Button>
      </View>
    );
  }
}
const StackNavigator2 = createStackNavigator(
  {
    Navigate2:{ screen: App,
     navigationOptions:{
       title:"Home"
     }},
    ShowAll:{ screen: showAllRestaurant,
      navigationOptions:{
        title:"All restaurant"
      }},
    detail:{ screen: detail,
      navigationOptions:{
        title:"Detail"
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
    Home: {screen: StackNavigator2,
      navigationOptions:{
      tabBarIcon:()=>(
        <Icon name="ios-home" style={{color:'white'}} size={30}/>
      )
    }
  },
    Restaurant:{screen: restaurant,
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