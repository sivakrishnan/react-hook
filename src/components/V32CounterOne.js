import React, { useState } from 'react'
import useCounter from './hooks/useCounter'

function V32CounterOne() {
const [count, increment, decrement, reset]=useCounter(0, 1)
    // const [count, setCount] = useState(0)

    // const increment = () => {
    //     setCount(prevCount => prevCount + 1)
    // }

    // const decrement = () => {
    //     setCount(prevCount => prevCount - 1)
    // }

    // const reset = () => {
    //     setCount(0)
    // }

    return (
        <div>
            <h2>Count From ONE = {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default V32CounterOne