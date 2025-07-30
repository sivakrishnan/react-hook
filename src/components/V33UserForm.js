import React, { useState } from 'react'
import useInput from './hooks/useInput'

function V33UserForm() {

    //const [firstName, setFirstName] = useState('')
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    //const [lastName, setLastName] = useState('')
    const [lastName, bindLastName, resetLastName] = useInput('')


    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName}- ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First name</label>
                    {/* <input type='text' value={firstName}
                        onChange={e => setFirstName(e.target.value)}></input> */}
                    <input type='text' {...bindFirstName}></input>
                </div>
                <div>
                    <label>Last name</label>
                    {/* <input type='text' value={lastName}
                        onChange={e => setLastName(e.target.value)}></input> */}
                    <input type='text' {...bindLastName}></input>
                </div>
                <button >Submit</button>
            </form>
        </div>
    )
}

export default V33UserForm