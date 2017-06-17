import React, {Component} from 'react';
import { ReactGoogleMaps } from './ReactGoogleMaps';
import _ from 'underscore';

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
    super(props);

  }

  componentDidMount() {
    console.log('this.props.homes: ', this.props.homes);
    for (var i = 0; i < this.props.homes.length; i++) {
      var element = this.props.homes[i];
      console.log('element: ', element);
    }
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