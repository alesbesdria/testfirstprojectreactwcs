import './App.css';
import { useState } from 'react';
import PokemonCard from './components/PokemonCard';
import NavBar from './components/NavBar';
import { useEffect } from "react";


interface Pokemon {
  name: string;
  imgSrc?: string;
}

const pokemonList: Pokemon[] = [
  {
    name: 'bulbasaur',
    imgSrc:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  },
  {
    name: 'charmander',
    imgSrc:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
  },
  {
    name: 'squirtle',
    imgSrc:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
  },
  {
    name: 'pikachu',
    imgSrc:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
  },
  {
    name: 'mew',
  },
];

function App() {

  useEffect(() => {
    pokemonList[pokemonIndex].name === 'pikachu'
      ? alert('Pika Pikachu !!!')
      : alert('Hello pokemon trainer :)');
  });
  
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <div>
      <NavBar setPokemonIndex={setPokemonIndex} pokemonList={pokemonList} />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;
