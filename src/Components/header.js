import React, { useState,useEffect } from 'react';
import Score from "./scoreCOmponents/score"

function Header() {
    return ( <header>
        <div id="title-container">
        <h1>Memory Card Game</h1>
        </div>
        <div id="scoreContainer">
        <Score/>
        <h3>If you click the same character twice, u loose.</h3>
</div>

    </header> );
}

export default Header;<div></div>