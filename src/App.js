import cardsrc from "./cardsrc.json";
import "./App.css";

import { useEffect, useState } from "react";
import Card from "./Components/Card";
import WonPage from "./Components/WonPage";
import GameOverPage from "./Components/GameOverPage";
function get5IDs() {
  let arr = [];
  while (arr.length < 5) {
    let r = Math.floor(Math.random() * 33);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}
function App() {
  const [cardsToDisplay, setCardsToDisplay] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  const [isItWon, setIsItWon] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [bestScore,setBestScore]=useState(0)
  const [causedGameOver,setCauseedGameOver]=useState(null)
  useEffect(() => {
    if(!isItWon){
    getNewCards();
    }
  }, [isItWon]);
  function getNewCards() {
    if (clickedCards.length === 33) {
      setIsItWon(true);
    } else {
      let arr = get5IDs();
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(clickedCards.some(card=>parseInt(card.id)===element)){
          count++
        }
      }
      while (count >= 5) {
        count = 0;
        arr = get5IDs();
        for (let i = 0; i < arr.length; i++) {
          const element = arr[i];
          if(clickedCards.some(card=>parseInt(card.id)===element)){
            count++
          }
        }
      }
      let temp = arr.map((id) => {
        return cardsrc.find((card) => parseInt(card.id) === parseInt(id));
      });

      setCardsToDisplay([...temp]);
    }
  }
  useEffect(()=>{
    getNewCards()
  },[clickedCards])
  function handleClick(card) {
    if(isItWon){
      return
    }
    if (clickedCards.some((cardL) => cardL.id === card.id)) {
      setCauseedGameOver(cardsrc.find(cardsource=>card.id===cardsource.id))
      setIsGameOver(true);
    } else {
      setClickedCards((old) => [...old, card]);
     // getNewCards();
    }
  }
  useEffect(()=>{
    if(clickedCards.length>bestScore){
      setBestScore(clickedCards.length)
    }
  },[clickedCards.length])
  function newGame(){
    console.log("new")
    setCardsToDisplay([])
    setClickedCards([])
    setIsItWon(true)
    setIsItWon(false)
    setIsGameOver(false)
    setCauseedGameOver(null)
  }
  return (
    <div className="App">
      <header>
        GWENT Memory Card
      </header>
      <div className={isGameOver?"gameno":""}>
      <div className="scores">
          <div>Your Score:{clickedCards.length}/33</div>
          <div>Best Score:{bestScore}</div>
          </div>
          {isItWon?<WonPage newGame={newGame}/>:""}
      {!isGameOver ? (
        <>

          <div className="card-container">
            {cardsToDisplay.map((x) => {
              let src = `${x.srcId} - ${x.title.trim()}.png`;
              return (
                <Card
                  imgSrc={src}
                  name={x.title}
                  quote={x.quote}
                  x={x}
                  handleClick={handleClick}
                />
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}
      {isGameOver?<GameOverPage cardData={causedGameOver} newGame={newGame}/>:""}

    </div>
    </div>
  );
}

export default App;
