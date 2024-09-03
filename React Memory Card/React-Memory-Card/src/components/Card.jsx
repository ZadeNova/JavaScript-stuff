import { useState } from 'react'
import "../css/card.css";

function cardDisplay({ pokemonName , pokemonImage }) {

    console.log("Cards")

    return (
        <>
            <div className="memoryCard">
                <img src={pokemonImage} style={{ width: '50%' }}></img>
                <div className="memoryCard-Container">
                    <h4>{pokemonName}</h4>

                </div>


            </div>


    
        
        
        </>
    )

}

export default cardDisplay;