import React, { Component } from 'react'

export class V7ClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        document.title = `${this.state.count}-Clicked times`
    }

    componentDidUpdate(prevProps, prevState) {
        document.title = `${this.state.count}-Clicked times`
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click {this.state.count} times
                </button>
            </div>
        )
    }
}

export default V7ClassCounter