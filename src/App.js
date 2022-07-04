import cardsrc from "./cardsrc.json";
import "./App.css";

import { useEffect, useState } from "react";
function App() {
  const[cardsToDisplay,setCardsToDisplay]=useState([])
  useEffect(() => {
    let arr = [];
    while (arr.length < 5) {
      let r = Math.floor(Math.random() * 33);
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    console.log(cardsrc.forEach(card=>console.log(card)))
    let temp=arr.map(id=>{
      return cardsrc.find(card=>parseInt(card.id)===parseInt(id))
    })

    setCardsToDisplay([...temp])
  }, []);
  //"./imgs/10000000 - Falibor.png"
  // '10020000 - Arachas Venom'
  // '10020000 - Arachas Venom.png'

  return (
  <div className="App">
    {cardsToDisplay.map(x=>{
      let src=`${x.srcId} - ${x.title}.png`
      return <img alt='gwent card' src={require(`./imgs/${src}`)}/>
    })}
  </div>)
}

export default App;
