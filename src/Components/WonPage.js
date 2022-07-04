import React from 'react'

function WonPage({newGame}) {
  return (
    <div className='won-container'>
    <div className="re">You Won!</div>
    <button onClick={()=>newGame()}>New Game</button>
    </div>
  )
}

export default WonPage