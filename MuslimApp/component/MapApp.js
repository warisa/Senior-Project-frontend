import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

class MapApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{ // initial region set to Bileto
                    latitude: 50.0517273,
                    longitude: 14.4286503,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            />
        </View>
    );

  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    map: {
        flex: 1,
    }
});

export default MapApp;
