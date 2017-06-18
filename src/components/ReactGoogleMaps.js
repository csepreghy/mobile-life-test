import React from 'react';
import _ from 'underscore';
import { withGoogleMap, GoogleMap, Marker, OverlayView } from 'react-google-maps';
import mapStyles from '../config/mapStyles';

const STYLES = {
  mapContainer: {
    height: `100%`,
  },
  overlayView: {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15,
  },
};

function getPixelPositionOffset(width, height) {
  return { x: -(width / 2), y: -(height / 2) };
}

export const ReactGoogleMaps = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={11}
    defaultCenter={{ lat: 55.69, lng: 12.539 }}
    onClick={props.onMapClick}
    defaultOptions={{ styles: mapStyles }}
  >
  {
    props.markers.map((marker, index) => {
      if (props.homes[index]) {
        return (
          <div key={ index }>
            <Marker
              { ...marker }
              oClick={ props.handleMarkerClick }
              onRightClick={ () => props.onMarkerRightClick(index) }
            ></Marker>
            <OverlayView
              position={ marker.position }
              mapPaneName={ OverlayView.OVERLAY_MOUSE_TARGET }
              getPixelPositionOffset={ getPixelPositionOffset }
            >
              <div className="overlay" style={{opacity: props.homes[index].home.overlayOpacity}}>
                <div className="overlay-img">
                  <img src={ props.homes[index].home.imageUrl } alt=""/>
                </div>
                <div className="overlay-body">
                <h3>{ props.homes[index].home.streetName + ' ' + props.homes[index].home.streetNumber }</h3>
                </div>
              </div>
            </OverlayView>
          </div>
        );
      }
    })
  }
  </GoogleMap>
));