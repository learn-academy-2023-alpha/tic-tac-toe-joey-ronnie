import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'


const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(0)
  
  const checkTurn = (index) => {
    if(calculateWinner(squares) !== null){
      console.log(calculateWinner(squares))
     const winner = calculateWinner(squares) === "X" ? "Player One won(O)" : "Player Two won(X)"
       alert(winner)

    }else if (squares[index] === null) {
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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
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
          calculateWinner={calculateWinner}

           />
        )
      })}
     </div>
    </>
  )
}

export default App