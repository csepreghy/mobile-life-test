import React from 'react';
import { withGoogleMap, GoogleMap, Marker, OverlayView } from 'react-google-maps';
import mapStyles from '../config/mapStyles';

const loadPlaceholderImg = e => {
  e.target.src = '/no-house-photo.jpg'
}

function getPixelPositionOffset(width, height) {
  return { x: -(width / 2), y: -(height + 18) };
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
              <div className="overlay" 
                   style={{ display: props.homes[index].home.overlayDisplay }} >
                <div className="overlay-img">
                  <p>{ props.homes[index].home.streetName + ' ' + props.homes[index].home.streetNumber }</p>
                  <div className="img-title-background"></div>
                  <img onError={ loadPlaceholderImg } src={ props.homes[index].home.imageUrl } alt=""/>
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