import {useState} from 'react';
import TravelBlocksList from './components/TravelBlocksList';
import './index.css'
import AddBlocks from './components/AddBlocks'
import Map from './components/Map'

const App = () => {

  const [travelDestinations, setTravelDestinations] = useState([]);
  const [isMapSet,setMap] = useState(false)

  const addDestination = (submission)=>{

    const idNew = Math.floor(Math.random()*10000) + 1

    
    const newDest = {id:idNew,
      location:submission.dest,
      formtext:submission.text,
      image:submission.img
    }
    
    setTravelDestinations([...travelDestinations,newDest])

    console.log(travelDestinations)
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
      
      <div className='mapcontainer'>
            <Map location={savannah} zoomLevel={2} />
      </div>

    </div>




  );
}

export default App;
