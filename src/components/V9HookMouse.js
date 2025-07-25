import React, { useState, useEffect } from 'react'

function V9HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
    }, [])
    return (
        <div>
            Hooks X-{x}, Y-{y}
        </div>
    )
}

export default V9HookMouse