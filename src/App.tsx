import "./App.css";
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState<number | null>(null);

  return (
    <div>
      <nav>
        <ul
              style={{
                display: "flex",
                flexDirection: "row"
              }}
        >
          {pokemonList.map((pokemon, index) => (
            <li key={pokemon.name}>
              
              <button onClick={() => setPokemonIndex(index)}>
                {pokemon.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {pokemonIndex !== null && (
        <PokemonCard
          name={pokemonList[pokemonIndex].name}
          imgSrc={pokemonList[pokemonIndex].imgSrc}
        />
      )}
    </div>
  );
}

export default App;
