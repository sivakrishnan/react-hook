import React, { useState, useCallback } from 'react'
import V26Title from './V26Title'
import V26Count from './V26Count'
import V26Button from './V26Button'

function V26ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])
    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])
    return (
        <div>
            <V26Title></V26Title>
            <V26Count text="Age" count={age}></V26Count>
            <V26Button handleClick={incrementAge}>Increment Age</V26Button>
            <V26Count text="Salary" count={salary}></V26Count>
            <V26Button handleClick={incrementSalary}>Increment Salary</V26Button>
        </div>
    )
}

export default V26ParentComponent