import React, { useState, useEffect } from 'react'
import { Count } from './Count'
import { ButtonRow } from './ButtonRow'


export const Counter = () => {
  const [count, setCount] = useState(0)
  const [isCounting, setIsCounting] = useState(false)

  const increment = () => setCount(count+1)
  const decrement = () => setCount( count >0 ? count-1: 0)

  const incrementIfOdd = ()=> {
    if(count %2 !==0){
      increment()
    }
  }

  const asyncIncrement =() => {
    setTimeout(() => {
      increment()
    },1000)
  }
  useEffect(()=> {
    let intervalId
    if(isCounting){
      intervalId = setInterval(() => {
        setCount(prev => prev+1)
      }, 1000)
    }
    return ()=> {
      if(intervalId){
        clearInterval(intervalId)
      }
    }
  }, [isCounting])

  const handleClick = ()  => {
    console.log("is counting", isCounting)
    setIsCounting(!isCounting)
  }

  return (
    <>
        <Count count={count} />
        <ButtonRow increment={increment} decrement={decrement}/>
        <ButtonRow incrementIfOdd={incrementIfOdd} asyncIncrement={asyncIncrement} />
        <button id='timer-inc-btn' onClick={handleClick}>
          {isCounting ? "Stop": "Start"}
        </button>
    </>
  )
}
