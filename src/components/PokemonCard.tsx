function PokemonCard({ pokemon }) {

    return (
      <div>
        <h1>{pokemon.name}</h1>
        {pokemon.imgSrc ? (
    <img src={pokemon.imgSrc} alt={pokemon.name} />
  ) : (
    <p>???</p>
  )
        /* {pokemonList.map((pokemon, index) => (
          <div key={index}>
            <h1>{pokemon.name}</h1>
            {pokemon.imgSrc ? (
              <img src={pokemon.imgSrc} alt={pokemon.name} />
            ) : (
              <p>???</p>
            )}
          </div>
        ))} */}
      </div>
    );
  }
  
  export default PokemonCard;
  