import React from 'react'

function V26Button({ handleClick, children }) {
    console.log('video 26 Rendering button - ', children)
    return (
        <div>
            <button onClick={handleClick}>
                {children}
            </button>
        </div>
    )
}

export default React.memo(V26Button)