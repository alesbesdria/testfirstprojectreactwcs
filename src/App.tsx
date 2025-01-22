import "./App.css";
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickRight = () => {
    setPokemonIndex(pokemonIndex === 0 ? 1 : 0)
  };
  const handleClickLeft = () => {
    setPokemonIndex(pokemonIndex === 0 ? 1 : 0)
  };

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  return (
    <div>
    <PokemonCard
    name={pokemonList[pokemonIndex].name}
    imgSrc={pokemonList[pokemonIndex].imgSrc}
  />
    <button type="button" onClick={handleClickRight}>Suivant</button>
    <button type="button" onClick={handleClickLeft}>Précédent</button>
    </div>
  );
}

export default App;