import {useState} from 'react';
import TravelBlocksList from './components/TravelBlocksList';
import './index.css'
import AddBlocks from './components/AddBlocks'
import Map from './components/Map'
import Geocode from "react-geocode";



const App = () => {
  
  Geocode.setApiKey('');
  Geocode.setLanguage("en");
  const [travelDestinations, setTravelDestinations] = useState([]);
  //const [isMapSet,setMap] = useState(false)

  async function GoogleGeocode(location){

    const p1 = await Geocode.fromAddress(location)  
    return p1
  }  


  const addDestination = (submission)=>{

    const idNew = Math.floor(Math.random()*10000) + 1

    
    let x = GoogleGeocode(submission.dest)
    //var blah = x.then( (response) => {console.log(response.results[0].geometry.location.lat)})

    const newDest = {
      id:idNew,
      location:submission.dest,
      formtext:submission.text,
      image:submission.img,
      lat: x.then( (response) => {return response.results[0].geometry.location.lat}),
      lng: x.then( (response) => {return response.results[0].geometry.location.lng})
    }
    
    setTravelDestinations([...travelDestinations,newDest])

    console.log(newDest)
  }

  //remove later
  const savannah={
    lat:32.0809,
    lng:-81.0912,
    loc:'Savannah'
  }

  return (
    <div className>

      <div className='blah'>

      <TravelBlocksList tBlocks={travelDestinations}/>
      </div>
      <AddBlocks onEnter={addDestination}/>

        <Map location={travelDestinations} zoomLevel={2} />

    </div>

  );
}

export default App;


// .then(
//   (response) => {
//   const { lat, lng } = response.results[0].geometry.location;
//   console.log(lat, lng);
//   },
//   (error) => {
//   console.error(error);
//   }