import "./App.css";

import PokemonCard from "./components/PokemonCard";

function App() {

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
    
  );
}

export default App;