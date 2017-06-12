import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Container, Content, Button, Fab, ListItem, Left, Body } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MapView from 'react-native-maps';
import RNGooglePlaces from 'react-native-google-places';

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
    bottom: 50,
  },
});

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      title: '',
      place: 'empty',
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
          longitude: position.coords.longitude,
          title: 'You are here',
        })
        this._onRegionChange({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        })
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 300000, maximumAge: 1000},
    );
  }

  componentDidMount() {
    this.getInitialData();
  }

  _onRegionChange = (region) => {
    this.setState({ region })
  }

  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal({
      country: 'ID',
      useOverlay: true,
    })
    .then((place) => {
		  console.log(place);
      this.setState({
        latitude: place.latitude,
        longitude: place.longitude,
        title: 'You picked place here',
      })
      this._onRegionChange({
        latitude: place.latitude,
        longitude: place.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      })
    })
    .catch(error => console.log(error.message));
  }

  render() {
    const { latitude, longitude, title, region } = this.state;
    const that = this;

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
            title={title}>
          </MapView.Marker.Animated>
        </MapView>

        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: 'row', }}>
            <Button
              info
              onPress={() => this.openSearchModal()}
              style={{ marginTop: 10 }}
            >
              <Text>Pick a Place</Text>
            </Button>
            <Button
              success
              style={{ marginTop: 10, marginLeft: 50, }}
            >
              <Text>Save Place</Text>
            </Button>
          </View>
          <View style={{ flex: 1, alignSelf: 'flex-end', marginRight: 40, marginBottom: 10 }}>
            <Fab
              active={false}
              direction="right"
              style={{backgroundColor:'grey'}}
              position="bottomLeft"
              onPress={() => this.getInitialData()}
            >
              <Icon name="my-location"/>
            </Fab>
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text>{that.state.place}</Text>
        </View>

      </View>
    );
  }
}

export default Maps;
