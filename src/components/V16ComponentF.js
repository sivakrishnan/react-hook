import React from 'react'
import V16ComponentE from './V16ComponentE'
import { UserContext, ChannelContext } from '../App'

function V16ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return (
                                            <div>User context value {user}, channel context value {channel}</div>
                                        )
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>

        </div>
    )
}

export default V16ComponentF