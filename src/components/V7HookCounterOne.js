
import React, { useState, useEffect } from 'react'

function V7HookCounterOne() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `${count}-You Clicked times`
    })
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default V7HookCounterOne