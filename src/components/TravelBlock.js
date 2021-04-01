import React from 'react'
import '../index.css'
const TravelBlock = ({location, formtext, image}) => {
     

    return (

        <div className='travel_card'>
            <h1>{location}</h1>
            <p>{formtext}</p>
            <img src={ !image ? "https://image.shutterstock.com/image-vector/world-map-blue-260nw-455675437.jpg" : image}/>
        </div>
    )
}

export default TravelBlock


