import React, { useState, useEffect } from "react";

import Cards from "./CardsCOmponent/cards";
import Score from "./scoreCOmponents/score";

const Main = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [score, setScore] = useState({
    maxScore: 0,
    score: 0,
  });


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

const resetScore = () => {
  const newScore = score
  if(newScore.score > newScore.maxScore){
    newScore.maxScore = newScore.score
  }
  newScore.score = 0
  setScore(newScore)
}
const sumScore = () => {
  setScore((prevState) => ({
    ...prevState,
    score: prevState.score+1,
  }));
}

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
    let falsyPokemonList = [...pokemonList];
    falsyPokemonList.forEach((pokemon) => {
      pokemon.clicked = false;
    });
    setPokemonList(falsyPokemonList);
  };
  const restartGame = () => {
    reOrderPokemonList();
    restartPokemonBoolean();
    resetScore()
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
      sumScore()
    } else {
      restartGame();
    }
  };

  return (
    <main>
      <Score score={score} />
      {<Cards pokemonList={pokemonList} clickHandler={clickHandler} />}
    </main>
  );
};

export default Main;
<div></div>;
