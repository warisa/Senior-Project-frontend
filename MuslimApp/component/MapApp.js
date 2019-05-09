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
                    latitude: 13.636544, 
                    longitude: 100.491329,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                showsUserLocation={true}
            >
            <MapView.Marker
                coordinate={{
                    latitude: 13.636544, 
                    longitude: 100.491329,
                }}
                title={"I-MY SHABU"}
             />
             </MapView>
        </View>
    );

  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF",
    },
    map: {
        width: '100%',
        height: 200
    }
});

export default MapApp;
