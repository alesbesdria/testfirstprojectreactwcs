import "./App.css";
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClickRight = () => {
    setPokemonIndex({ name: pokemonIndex-- })
  };
  const handleClickLeft = () => {
    setPokemonIndex({ name: pokemonIndex-- })
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
    <PokemonCard name={pokemonList[1].name} imgSrc={pokemonList[1].imgSrc} />
    <button type="button" onClick={handleClickRight}>Suivant</button>
    <button type="button" onClick={handleClickLeft}>Précédent</button>
  );
}

export default App;