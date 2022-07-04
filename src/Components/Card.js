import React from "react";

export default function Card({ imgSrc, name, quote,handleClick,x }) {
  return (
    <div className="card" onClick={()=>handleClick(x)}>
        <div className="shadow-holder">
        <img alt="gwent card" src={require(`../imgs/${imgSrc}`)} />
        <div className="shadow"></div>
        </div>

        <div className="name">{name}</div>
        <div className="quote">
            {quote}
        </div>
    </div>
  );
}
