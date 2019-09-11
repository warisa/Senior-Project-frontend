import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight,Image } from 'react-native';
import Axios from 'axios';
import Card from './Card';
import CardSection from './CardSection';
import { ScrollView } from 'react-native-gesture-handler';

export default class category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: [],
      category:[],
      search: null,
      categoryName: props.navigation.getParam('categoryName')
    }
  }
  componentWillMount() {
    Axios.get('http://10.4.56.94/restaurant')
    .then(response => this.setState({ place: response.data }))
  }
  componentWillMount() {
    Axios.get('http://10.4.56.94/searchbycategory1/'+this.state.categoryName)
    .then(response => this.setState({ category:response.data }))
  }
  render() {
    return (
      <ScrollView>
                  { 
                    this.state.category.map( (restaurant,i) =>{
                      return <Card key={i}> 
                                <View>
                                  <CardSection>
                                    <View>
                                    <TouchableHighlight onPress={() => this.props.navigation.navigate('RESTAURANTDETAIL',{placeId:restaurant.placeId})}>                             
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
                              </Card>;
                    })
                  }        
        </ScrollView>
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
