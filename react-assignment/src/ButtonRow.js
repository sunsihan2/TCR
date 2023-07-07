import React from 'react'

export const ButtonRow = ({increment, decrement, incrementIfOdd, asyncIncrement}) => {
  const buttons = increment && decrement?(
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  ): (
    <>
     <button onClick={incrementIfOdd}>Increment If Odd</button>
      <button onClick={asyncIncrement}>Async-Inc</button>
    </>
  )
  return (
    <div>{buttons}</div>
  )
}
