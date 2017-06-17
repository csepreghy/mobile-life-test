import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import mapStyles from '../config/mapStyles';

export const ReactGoogleMaps = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={11}
    defaultCenter={{ lat: 55.69, lng: 12.539 }}
    onClick={props.onMapClick}
    defaultOptions={{ styles: mapStyles }}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))}
  </GoogleMap>
));