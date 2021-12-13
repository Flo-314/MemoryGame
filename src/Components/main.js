import React, { useState, useEffect } from "react";
import Cards from "./CardsCOmponent/cards";
const Main = () =>  {
  const [pokemonList, setPokemonList] = useState();
  const fetchApi = async () => {
    const apiLink = "https://pokeapi.co/api/v2/pokemon?limit=9";
   
    const data = await fetch(apiLink);
    const fetchedPokemonList = await data.json();
    let newPokemonList = []
    fetchedPokemonList.results.forEach(async (apiPokemon) => {
      let pokemon = await fetch(apiPokemon.url);
      pokemon = await pokemon.json();
     newPokemonList.push(pokemon)
    });
    setPokemonList(newPokemonList);

  };
  useEffect(() => {
  
    fetchApi();
  }, []);

  return (
    <main>
     <Cards pokemonList={pokemonList}/>
    </main>
  );
}

export default Main;
<div></div>;
