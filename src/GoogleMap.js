/*
 * This component is the top component, it contains the map, and all the other components are under this one.
 */

import React, {Component} from "react"
import { withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps";
import { Router, Route, browserHistory } from 'react-router';
import _ from 'underscore'

class MapContainer extends Component {

    constructor(props) {
      super(props);
      this.state = {
        markers: [{
          position: {
            lat: -37.8182711,
            lng: 144.9670618,
          }
        }],
        path_arr: [
          {lat: 37.772, lng: -122.214},
          {lat: 21.291, lng: -157.821},
          {lat: -18.142, lng: 178.431},
          {lat: -27.467, lng: 153.027}
        ],
        lat: "",
        longt: ""
      }
    }

    componentWillMount() {
      console.log("in componentDidMount woohooo");
      var this2 = this;

      var rest = require('rest');

      rest('http://freegeoip.net/json/').then(function(response) {
          var parsedData = JSON.parse(response.entity)
          console.log('response: ', parsedData.latitude);
           this2.setState({lat: parsedData.latitude, longt: parsedData.longitude})
      });

    }

    render() {

      const GettingStartedGoogleMap = withGoogleMap(props => {
        return (
          <GoogleMap
            ref={props.onMapLoad}
            defaultZoom={15}
            defaultCenter={{ lat: this.state.lat, lng: this.state.longt}}
            onClick={props.onMapClick}
          >


            {props.markers.map((marker, index) => (
              <Marker
                key={index}
                position={marker.position}
                onRightClick={() => props.onMarkerRightClick(marker)}
              />
            ))}

            <Polyline
              onClick={_.noop}
              onRightClick={_.noop}
              onDragStart={_.noop}
              path={props.path}
            />

          </GoogleMap>
        )
       }
      )

      return (

        <div style={{height: '100%', width: '100%', position:'absolute'}}>
          <GettingStartedGoogleMap
              containerElement={
                <div style={{height: '100%', width: '100%'}} />
              }
              mapElement={
                <div style={{ height: "100%" }} />
              }
              markers={this.state.markers}
              path={this.state.path_arr}
          />
        </div>
      )
    }

}


export default MapContainer;
