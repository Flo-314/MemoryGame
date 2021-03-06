import React, { useState, useEffect } from "react";
import Card from "./card";
import uniqid from "uniqid";

const Cards = (props) => {
  return (
    <div id="cards-container">
      {props.pokemonList !== undefined &&
        props.pokemonList.map((pokemon) => {
          return <Card key={uniqid()} pokemon={pokemon}  clickHandler={props.clickHandler}  />;
        })}
    </div>
  );
};

export default Cards;
<div></div>;
