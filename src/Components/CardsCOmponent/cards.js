import React, { useState, useEffect } from "react";
import Card from "./card";

const Cards = (props) => {
  return (
    <div id="cards-container">
        <button onClick={() => console.log(props.pokemonList)}> asdasd </button>
              {props.pokemonList !== undefined && props.pokemonList.map((pokemon) => {
        return <Card />;
      })}   
    </div>
  );
};

export default Cards;
<div></div>;
