import React, { useState } from 'react'

function V3HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const IncrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(preCount => preCount + 1)
        }
    }
    return (
        <div>
            Count:{count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(preCount => preCount + 1)}>Increment using PreState</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(preCount => preCount - 1)}>Decrement using PreState</button>
            <button onClick={IncrementFive}>Increment by 5</button>
        </div>
    )
}

export default V3HookCounterTwo