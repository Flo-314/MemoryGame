import React, { useState, useEffect } from "react";
import Card from "./card";
import uniqid from "uniqid"

const Cards = (props) => {
  return (
    <div id="cards-container">
              {props.pokemonList !== undefined && props.pokemonList.map((pokemon) => {
/*                 console.log(pokemon)
 */        return <Card key={uniqid()} pokemon={pokemon} />;
      })}   
    </div>
  );
};

export default Cards;
<div></div>;
