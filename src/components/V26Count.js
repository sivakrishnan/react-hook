import React from 'react'

function V26Count({text, count}) {
    console.log(`Rendering ${text}`)
    return (
        <div>{text} - {count}</div>
    )
}

export default React.memo(V26Count)