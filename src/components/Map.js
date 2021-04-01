import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import LocationPin from './LocationPin'
import Geocode from "react-geocode";


Geocode.setApiKey('AIzaSyBkzQs8u7IwDtr9wcsSDqiKsxZVp3bVSlk');
Geocode.setLanguage("en");


const GoogleGeocode = (location)=>{
        Geocode.fromAddress(location).then(
        (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        },
        (error) => {
        console.error(error);
        }
    )
}

const Map = ({ location, zoomLevel }) => (

    <div className="map">
      <h2 className="map-h2">Places You've Been!</h2>
  
      <div className="google-map">

        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBkzQs8u7IwDtr9wcsSDqiKsxZVp3bVSlk' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
            
          {/* <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.loc}
          /> */}
        </GoogleMapReact>
      </div>
    </div>
  )

export default Map
