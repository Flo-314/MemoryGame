import React, { useState,useEffect } from 'react';
import Card from "./card";

function Cards(props) {
    return ( <div id="cards-container">
        {props.pokemonList.map((pokemon) => {
            return(
            <Card  
            pokemonName={pokemon.forms[0].name}
            pokemonImg={pokemon.sprites.other.home.front_default}/>)

        })}

    </div> );
}

export default Cards;<div></div>