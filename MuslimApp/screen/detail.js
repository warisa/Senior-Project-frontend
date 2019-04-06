import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

export default class detail extends Component {

  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('titleId');
    const artist = navigation.getParam('artist');
    const thumbnail = navigation.getParam('thumbnail');
    const image = navigation.getParam('image');
    return (
        <Card>
          <CardSection>
            <View>
            <Image style={styles.thumbnailStyle} source={{ uri: thumbnail }}/>
            </View>
            <View style={styles.headerContentStyle}>
              <Text>Title: {JSON.stringify(title)}</Text>
              <Text>Artist: {JSON.stringify(artist)}</Text>
            </View>
            </CardSection>
            <CardSection>
            <Image style={styles.imageStyle} source={{ uri: image }}/>
          </CardSection>
        </Card>
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
    height: 50,
    width: 50
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};