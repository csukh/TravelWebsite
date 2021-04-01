import TravelBlock from './TravelBlock'


const TravelBlocksList = ({tBlocks}) => {
    return (
        < >
            {tBlocks.map( card => ( <TravelBlock location={card.location} formtext={card.formtext} image={card.image}/> )
               
                
            )}

            {/* {tBlocks.map( (card) => (
                <TravelBlock location={card.location} formtext={card.formtext} image={card.image}/>
            )

            )}             */}
        </>
    )
}

export default TravelBlocksList
