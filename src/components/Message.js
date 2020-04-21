// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

// export default class Message extends Component {
//     constructor(){
//         super()
//         this.state = {
//             message: "welcome visitor"
//         }
//     }
//     changeMessage = () =>{
//         this.setState({message: "welcome boy"})
//     }
//     render() {
//         const { message } = this.state
//         return (
//             <div>
//                  <h1>
//                 {message}
//             </h1>
//             <button onClick={this.changeMessage}>subscribe</button>
//             <Link to="/">Home</Link>
//             </div>
           
//         )
//     }
// }

import React, {Component} from 'react';
import Greet from './Greet';
import { NavLink, Redirect, Link} from 'react-router-dom'
import '../components/Mystyle.css'



class Message extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            name:[1,2,3,4,0.5],
            obj:{
                sch:"funaab"
            }
        }
    }
      
changeName=()=>{
    this.setState({
        name:[...this.state.name,"clothe", "riwan"],
        obj:{...this.state.obj, scc:"kcc"}
    })
}
changeName2 =()=>{
    const newArr = this.state.name.slice()
    newArr.push("rilwan")
    this.setState({
        name: newArr
    })
}
deleteButton=()=>{
    this.setState({
        obj: delete this.state.obj["scc"]
    })
}
filterFunction=()=>{
    const newFilt =  this.state.name.filter(num=>num>2)
    this.setState({
        name: newFilt
    })
}
    render(){
        return(
            <div> Hello {this.state.obj["scc"]}
             <button onClick={this.changeName}>click me</button>
             <button onClick={this.deleteButton}>Delte</button>
             <button onClick={this.filterFunction}>filter</button>
        <div>{this.state.name.map((items)=>{
            return(
                <div>{items}</div>
            )
        })}</div>
            {this.state.obj.sch}
            <Link to="/" className="hurray">Home</Link>
            <Link to={location => ({ ...location, pathname: "/counter" })}>Home2</Link>
            <NavLink to="/" activeClassName="hurray">Home</NavLink>
            {/* <Redirect to="/counter"></Redirect> */}
            </div>
           
        )
    }
}

export default Message 