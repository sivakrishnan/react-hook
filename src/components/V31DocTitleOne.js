import React, { useState, useEffect } from 'react'
import useDocumentTitle from './hooks/useDocumentTitle'

function V31DocTitleOne() {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     document.title = `Count ${count}`
    // }, [count])
    useDocumentTitle(count)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}

export default V31DocTitleOne