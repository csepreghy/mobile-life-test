import React, {Component} from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { ReactGoogleMaps } from './ReactGoogleMaps';
import _ from 'underscore';

console.log('ReactGoogleMaps: ', ReactGoogleMaps);

var i = 0;
var google = window.google;

const markers = [
    {
      position: {
        lat: 25.0112183,
        lng: 121.52067570000001,
      },
      key: `Taiwan`,
      defaultAnimation: 2,
    }
  ];

class Map extends Component {

  constructor(props) {
    super();

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
          onMarkerRightClick={_.noop}
        />
      </div>
    );
  }
}

export default Map;