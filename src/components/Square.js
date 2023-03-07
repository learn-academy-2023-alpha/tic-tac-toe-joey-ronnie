import React from 'react'

const Square = ({value, index, checkTurn, calculateWinner}) => {

  const handleTurn = () =>{
    checkTurn(index)
    calculateWinner(index)
    
  }

  return (
    <div className="square" onClick={handleTurn}>{value}</div>
  )
}
export default Square
