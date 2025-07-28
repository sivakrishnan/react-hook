import React, { useState } from 'react'
import V9HookMouse from './V9HookMouse'

function V10MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <V9HookMouse></V9HookMouse>}
        </div>
    )
}

export default V10MouseContainer