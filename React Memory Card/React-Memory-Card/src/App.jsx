import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardDisplay from './components/Card.jsx'

function App() {
  //const [count, setCount] = useState(0)
  const [bestScore , setbestScore] = useState(0);
  const [currentScore , setcurrentSource] = useState(0);

  const [cardList , setcardList] = useState([
    { PokemonName: "charizard", ImageSrc: "" },
    { PokemonName: "pikachu", ImageSrc: "" },
    { PokemonName: "eevee", ImageSrc: "" },
    { PokemonName: "mewtwo", ImageSrc: "" },
    { PokemonName: "ninetales", ImageSrc: "" },
    { PokemonName: "snorlax", ImageSrc: "" },
    { PokemonName: "dragonite", ImageSrc: "" },
    { PokemonName: "meowth", ImageSrc: "" },
    { PokemonName: "gengar", ImageSrc: "" },
    { PokemonName: "lucario", ImageSrc: "" },
    { PokemonName: "vaporeon", ImageSrc: "" },
    { PokemonName: "flareon", ImageSrc: "" },
    { PokemonName: "espeon", ImageSrc: "" },
    { PokemonName: "jolteon", ImageSrc: "" },
    { PokemonName: "bulbasaur", ImageSrc: "" },
    { PokemonName: "ivysaur", ImageSrc: "" },
    { PokemonName: "venusaur", ImageSrc: "" },
    { PokemonName: "charmander", ImageSrc: "" },
    { PokemonName: "charmeleon", ImageSrc: "" },
    { PokemonName: "blastoise", ImageSrc: "" },
    { PokemonName: "pidgeot", ImageSrc: "" },
    { PokemonName: "ekans", ImageSrc: "" }
  ]
  );

  // let pokemonCardList = ["Charizard" , "Pikachu" , "Eevee", "Mewtwo", "Ninetales" , "Snorlax" ,"Dragonite" , "Meowth" , "Gengar" , "Lucario" , "Vaporeon", "Flareon" ,"Espeon" , "Jolteon" , "Bulbasaur" , "Ivysaur" , "Venusaur" , "Charmander" , "Charmeleon" , "Blastoise" , "Pidgeot" , "Ekans"]

  //setcardList(pokemonCardList);
  // use side effects to save list/randomize list??
  useEffect( () => {
    const fetchImages = async () => {
      const updatedList = await Promise.all(cardList.map(async (pokemon) => {

        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.PokemonName}`);

          
          const data = await response.json();
          
          let imageUrl = data.sprites.front_default
    

          return {...pokemon , ImageSrc: imageUrl};
        }
        catch (error){
          console.error(`Failed to fetch image for ${pokemon.PokemonName}:` , error);
          return pokemon;
        }

      })
    
    );

    setcardList(updatedList);

  
  };
  fetchImages();
  }, []
  );
  

  return (
    <>
      <div className="content">
        <h2>Memory Card App</h2>
        <div className="scoreboard">
          <fieldset>
          <legend>ScoreBoard</legend>
          <h4>Score: {currentScore}</h4>
          <h4>Best Score: {bestScore}</h4>

        </fieldset>
        </div>
        
        <div className="card-content">
          {
            cardList.map((cards) => (
              
              <CardDisplay key={cards.PokemonName}
                pokemonName={cards.PokemonName}
                pokemonImage={cards.ImageSrc}

              ></CardDisplay>

            ))
          }

        </div>
      </div>





    </>
  )
}

export default App
