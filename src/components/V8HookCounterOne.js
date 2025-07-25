
import React, { useState, useEffect } from 'react'

function V8HookCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('useEffect Functional Component- Updating document title')
        document.title = `${count}-You Clicked times`
    }, [count])
    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default V8HookCounterOne