function PokemonCard(props) {
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

    console.log(props);
    
  
    const pokemon = pokemonList[1];

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
  