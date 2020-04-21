import React, { Component } from 'react'

class StaticgetDerived extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"kolade"
        }
    }
    static getDerivedStateFromProps(props, state) {
        return state = {
            name: " rilwan"
        }
    }
    render() {
        return (
            <div>
                {this.state.name}
            </div>
        )
    }
}

export default StaticgetDerived
