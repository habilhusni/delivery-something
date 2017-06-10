import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
});

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    }

  }

  getInitialData() {
    const { region } = this.state;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
        this._onRegionChange({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        })
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }

  componentDidMount() {
    this.getInitialData();
  }

  _onRegionChange = (region) => {
    this.setState({ region })
  }

  render() {
    const { latitude, longitude, region } = this.state;

    return(
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={region}
          onRegionChange={this._onRegionChange}
          loadingEnabled={true}
        >
          <MapView.Marker.Animated
            coordinate={{latitude, longitude}}
            title="You are here">
          </MapView.Marker.Animated>
        </MapView>
      </View>
    );
  }
}

export default Maps;
