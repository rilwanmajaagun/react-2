import React, { Component } from 'react'
import './Todo.css'

 class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:false
        }
    }
componentWillUpdate(newProps, newState){
    if (!newState.show){
        document.getElementById("fade").style='opacity: 1;';
    }else{
        document.getElementById("fade").style='opacity:0;';
    }
}
toggleCollapse=()=>{
    this.setState({
        show: !this.state.show
    })
}
    render() {
        return (
            <div className ="Animation">
                <button onClick={this.toggleCollapse}>{this.state.show ? 'Collape': 'Expand'}</button>
                <div id="fade" className={this.state.show ? 'transition show':'transition'}>this.text will disappear</div>
            </div>
        )
    }
}

export default Todo
