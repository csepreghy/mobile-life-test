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

  componentDidMount() {
    console.log('did mount');
  }

  componentWillMount() {
    console.log('will mount');
  }

  componentWillReceiveProps(props) {
    console.log('will receive props, ', props);
    this.setState({ homes: props.homes });
    
    for (let i = 0; i < props.homes.length; i++) {
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
  }

  render() {
    console.log('render');
    console.log('this.state.homes: ', this.state.homes);
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