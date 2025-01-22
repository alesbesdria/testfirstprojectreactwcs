interface pokemon{
  name: string;
  imgSrc: string;
}

function PokemonCard({ name,imgSrc }:pokemon) {
  

    return (
      <div>
        <h1>{name}</h1>
        {imgSrc ? (
    <img src={imgSrc} alt={name} />
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
  