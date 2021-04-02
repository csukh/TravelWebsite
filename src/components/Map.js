import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import LocationPin from './LocationPin'


const Map = ({ location, zoomLevel }) => (

    <div className="map">
      <h2 className="map-h2">Places You've Been!</h2>
  
      <div className="google-map">

        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={!location ? location[0]: {lat:39.0,lng:-77.0} }
          defaultZoom={zoomLevel}
        >
        
          {/* {!location ? 
            console.log('blah')
            : location.forEach(place => {
                    <LocationPin
                    lat={place.lat}
                    lng={place.lng}
                    text={place.loc}
          />                
            }) } */}
          
        </GoogleMapReact>
      </div>
    </div>
  )

export default Map

// <LocationPin
//             lat={39.0}
//             lng={77.0}
//             text={'current loc'} />