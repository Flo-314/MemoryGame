import React, { useState, useEffect } from "react";

import Cards from "./CardsCOmponent/cards";
const Main = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const fetchApi = async () => {
    const randomNumber = () => Math.floor(Math.random() * (800 - 1)) + 1;
    const apiLink =
      "https://pokeapi.co/api/v2/pokemon?limit=12&offset=" + randomNumber();
    const data = await fetch(apiLink);
    const fetchedPokemonList = await data.json();
    fetchedPokemonList.results.forEach(async (apiPokemon) => {
      let pokemon = await fetch(apiPokemon.url);
      pokemon = await pokemon.json();
      pokemon = {
        image: pokemon.sprites.other.dream_world.front_default,
        name: pokemon.name,
        clicked: false,
        id: randomNumber(),
      };
      setPokemonList((pokemonList) => [...pokemonList, pokemon]);
    });
  };
  useEffect(() => {
    fetchApi();
  }, []);

  const reOrderPokemonList = () => {
    let ShufledPokemonList = [...pokemonList];
    for (let i = ShufledPokemonList.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const temporalPokemon = ShufledPokemonList[i];
      ShufledPokemonList[i] = ShufledPokemonList[randomIndex];
      ShufledPokemonList[randomIndex] = temporalPokemon;
    }
    setPokemonList(ShufledPokemonList);
  };
  const restartPokemonBoolean = () => {
    //  foreach pokemon click.state.new
  };
  const restartGame = () => {
    reOrderPokemonList();
    restartPokemonBoolean();
    // if highscore < score => highscore = score
    // score = 0
  };
  const clickHandler = (pokemonName) => {
    const arrayIndex = pokemonList.findIndex((pokemon) => {
      return pokemon.name === pokemonName;
    });
    const newPokemonList = [...pokemonList];
    if (newPokemonList[arrayIndex].clicked === false) {
      newPokemonList[arrayIndex].clicked = true;
      setPokemonList(newPokemonList);
      reOrderPokemonList();
    } else {
      restartGame();
    }
  };

  return (
    <main>
      {<Cards pokemonList={pokemonList} clickHandler={clickHandler} />}
    </main>
  );
};

export default Main;
<div></div>;
