import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="TicTacBoard">
      {squares.map((value,index)=>{
        return(
          <Square  />
        )
      })}
     </div>
    </>
  )
}

export default App