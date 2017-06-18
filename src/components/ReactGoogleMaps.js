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
      console.log('marker: ', marker.position);
      return (
      <div key={ index }>
        <Marker
          {...marker}
          oClick={props.handleMarkerClick}
          onRightClick={() => props.onMarkerRightClick(index)}
        ></Marker>
        <OverlayView
          position={ marker.position }
          
          /*
          * An alternative to specifying position is specifying bounds.
          * bounds can either be an instance of google.maps.LatLngBounds
          * or an object in the following format:
          * bounds={{
          *    ne: { lat: 62.400471, lng: -150.005608 },
          *    sw: { lat: 62.281819, lng: -150.287132 }
          * }}
          */
          /*
          * 1. Specify the pane the OverlayView will be rendered to. For
          *    mouse interactivity, use `OverlayView.OVERLAY_MOUSE_TARGET`.
          *    Defaults to `OverlayView.OVERLAY_LAYER`.
          */
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          /*
          * 2. Tweak the OverlayView's pixel position. In this case, we're
          *    centering the content.
          */
          getPixelPositionOffset={getPixelPositionOffset}
          /*
          * 3. Create OverlayView content using standard React components.
          */
        >
          <div style={STYLES.overlayView}>
            <h1>OverlayView</h1>
            <button>
              I have been clicked
            </button>
          </div>
        </OverlayView>
      </div>
      );
    })
  }
  </GoogleMap>
));