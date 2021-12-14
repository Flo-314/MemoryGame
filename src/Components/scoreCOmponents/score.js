import React, { useState, useEffect } from "react";
const Score = props  => {
  return <div id="scoreContainer">
      <div id="maxScore-Container">Max Score {props.score.maxScore}</div>
      <div id="actualScore-Container">Actual Score {props.score.score}</div>
  </div>;
}

export default Score;
<div></div>;
