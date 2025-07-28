import React, { useState, useEffect } from 'react'

function V11IntervalHookCounter(props) {
    const someProp = props.name
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }



    useEffect(() => {
        // function doSomething() {
        //     console.log(someProp)
        // }
        // doSomething()
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div>V11IntervalHookCounter</div>
    )
}

export default V11IntervalHookCounter