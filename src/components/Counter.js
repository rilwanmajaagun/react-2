import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    increament(){
        this.setState({
            count: this.state.count + 1
        })

    }
    
    render() {
        return ( <div>
            <div>
                count -{ this.state.count}
            </div>
            <button onClick = {()=> this.increament()}>Increament </button>
            <Link to="/message">message</Link>
        </div>
            
        )
    }
}

export default Counter
