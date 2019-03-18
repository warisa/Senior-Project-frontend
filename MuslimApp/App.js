/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import restaurant from './screen/restaurant';
import prayerPlace from './screen/prayerPlace';
import prayerTime from './screen/prayerTime';
import account from './screen/account';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import {Icon} from 'native-base';


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to my Application!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: {screen: App,
      navigationOptions:{
      tabBarIcon:()=>(
        <Icon name="home" style={{color:'white'}} size={20}/>
      )
    }
  },
    Restaurant:{screen: restaurant,
      navigationOptions:{
        tabBarIcon:()=>(
          <Icon name="md-restaurant" style={{color:'white'}} size={20}/>
        )
      }
    },
    PrayerPlace:{screen: prayerPlace,
      navigationOptions:{
        tabBarIcon:()=>(
          <Icon name="md-restaurant" style={{color:'white'}} size={20}/>
        )
      }
    },
    PrayerTime:{screen: prayerTime,
      navigationOptions:{
        tabBarIcon:()=>(
          <Icon name="ios-time" style={{color:'white'}} size={20}/>
        )
      }
    },
    Account:{screen: account,
      navigationOptions:{
        tabBarIcon:()=>(
          <Icon name="md-restaurant" style={{color:'white'}} size={20}/>
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