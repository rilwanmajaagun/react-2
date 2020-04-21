import React,{useState} from 'react'
import useCounter from './useCounter'

const Counter2 = () => {
    const [ count, increment, decrement, reset]=useCounter(0);
    return (
        <div>
            <h2> count = {count}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Counter2
