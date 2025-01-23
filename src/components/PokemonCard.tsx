// import React from 'react';

interface Pokemon {
  name: string;
  imgSrc?: string;
}

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div>
      <h1>{pokemon.name}</h1>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
    </div>
  );
};

export default PokemonCard;
