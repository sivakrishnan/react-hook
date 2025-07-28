import React, { useContext } from 'react'
import V16ComponentC from './V16ComponentC'
import V16ComponentF from './V16ComponentF'
import { UserContext, ChannelContext } from '../App'

function V16ComponentE() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            <div>
                <h3>useContext used in Component E-{user}-{channel}</h3>
            </div>
            <V16ComponentF>

            </V16ComponentF>
        </div>
    )
}

export default V16ComponentE