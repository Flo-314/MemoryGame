import React, { useState, useEffect } from "react";

import Cards from "./CardsCOmponent/cards";
const Main = () => {



  const [pokemonList, setPokemonList] = useState([]);
  const fetchApi = async () => {
    const randomNumber = () => Math.floor(Math.random() * (800 - 1) ) + 1;
    const apiLink = "https://pokeapi.co/api/v2/pokemon?limit=12&offset=" + randomNumber();
    const data = await fetch(apiLink);
    const fetchedPokemonList = await data.json();
    fetchedPokemonList.results.forEach(async (apiPokemon) => {
      let pokemon = await fetch(apiPokemon.url);
      pokemon = await pokemon.json();
      pokemon = {
        "image": pokemon.sprites.other.dream_world.front_default,
        "name": pokemon.name,
        "clicked": false,
        "id": randomNumber()
      }
      setPokemonList((pokemonList) => [...pokemonList, pokemon]);
    });
  };


  useEffect(() => {
    fetchApi();
  }, []);

  return <main>{<Cards pokemonList={pokemonList} />}</main>;
};

export default Main;
<div></div>;
