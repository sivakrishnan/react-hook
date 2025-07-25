import React, { Component } from 'react'

export class V8ClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `${this.state.count}-Clicked times`
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('Updating document title-video 8')
            document.title = `${this.state.count}-Clicked times`
        }
        
    }
    render() {
        return (
            <div>
                <input type='text' value={this.state.name} onChange={e => {
                    this.setState({ name: e.target.value })
                }}></input>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click {this.state.count} times
                </button>
            </div>
        )
    }
}

export default V8ClassCounter