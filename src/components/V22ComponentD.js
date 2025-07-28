import React, { useContext } from 'react'
import { CountContext } from '../App'

function V22ComponentD() {

    const countContext = useContext(CountContext)

    return (
        <div>
            <div>V22ComponentD-{countContext.countState}</div>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default V22ComponentD