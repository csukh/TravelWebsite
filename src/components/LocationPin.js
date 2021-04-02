import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import React from 'react'
//import faceWithMonocle from "@iconify/icons-twemoji/face-with-monocle"


const LocationPin = ({text}) => {
    return (
        <div className="pin">
        {/* <Icon icon={locationIcon} className="pin-icon" /> */}
        <Icon icon={locationIcon} className="pin-icon" />

        <p className="pin-text">{text}</p>
      </div>
    )
}

export default LocationPin
