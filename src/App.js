import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'


const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(0)
  
  const checkTurn = (index ) => {
    if (squares[index] === null) {
      // Draws X if it's player 1's turn else draws O
      const current = turn === 0 ? "X" : "O"
      // Updating the data state
      squares[index] = current;
      //Drawing on the board
      setSquares[index] = current
      // Switching the turn
      setTurn(turn === 0 ? 1 : 0)
      console.log(turn)
  }
}
  
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="TicTacBoard">
      {squares.map((value,index)=>{
        return(
          <Square 
          Key={index}
          value={value}
          index={index}
          checkTurn={checkTurn}
           />
        )
      })}
     </div>
    </>
  )
}

export default App