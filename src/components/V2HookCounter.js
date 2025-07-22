import React, { useState } from 'react'

function V2HookCounter() {
    const [count, setCount] = useState(0) // this is call array destructuring
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Count using useState Hook - {count}
            </button>
        </div>
    )
}

export default V2HookCounter