import React, { useState, useEffect } from "react";

const Card = (props) => {
  return (
    <div className="card"  onClick={() => props.togglePokemonBoolean(props.pokemon.name)} >
      <img src={props.pokemon.image} alt="pokemon" />
      <h1>{props.pokemon.name}</h1>
    </div>
  );
};

export default Card;
<div></div>;
