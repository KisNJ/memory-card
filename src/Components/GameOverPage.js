import React from "react";
import Card from "./Card";
export default function GameOverPage({ cardData,newGame }) {
  let src=`${cardData.srcId} - ${cardData.title.trim()}.png`
  return (
    <div className="card-container game-over">
      <Card imgSrc={src} name={cardData.title} quote={cardData.quote}/>
      <div className="re">Game Over!</div>
      <button onClick={()=>newGame()}>Retry</button>
    </div>
  );
}
