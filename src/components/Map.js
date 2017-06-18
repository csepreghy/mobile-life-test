import React, {Component} from 'react';
import { ReactGoogleMaps } from './ReactGoogleMaps';
import _ from 'underscore';

const markers = [];

class Map extends Component {

  constructor(props) {
    super();

    this.state = {
      homes: []
    }
  }

  handleMarkerClick() {
    console.log('marker clicked');
  }

  // This is needed because we are waiting for a promise to be resolved
  componentWillReceiveProps(props) {
    let updatedHomes = [];
    for (let i = 0; i < props.homes.length; i++) {
      //Create markers
      let longitude = props.homes[i].home.longitude;
      let latitude = props.homes[i].home.latitude;

      let marker = {
        position: {
          lat: latitude,
          lng: longitude
        },
        key: props.homes[i].home.streetName + ' ' + props.homes[i].home.streetNumber,
        defaultAnimation: 2,
        icon: '/marker.svg'
      }
      markers.push(marker);
    }

    this.setState({ homes: props.homes }); 
  }

  render() {
    return (
      <div className="map-container">
        <ReactGoogleMaps
          containerElement={
            <div style={{ height: '100%' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
          onMapLoad={_.noop}
          onMapClick={_.noop}
          markers={markers}
          homes={this.state.homes}
          onMarkerRightClick={_.noop}
        />
      </div>
    );
  }
}

export default Map;