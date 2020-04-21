import React, { Component } from 'react'

class Condition extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false,
             message: "welcome kolade"

        }
    }
    change =(eve)=>{
        this.setState({
            isLoggedIn: eve,
            message: "welcome guest"
        })
    }
    render() {
       const { message } = this.state
        // let message 
        // if (this.state.isLoggedIn){
        //     message =  <div> welcome kolade</div>
        // }else {
        //     message =<div>welcome guest</div>
        // }
        // return (
        //     <div>
        //         {message}
        //     </div>
        // )
        return( <div>
             {this.state.isLoggedIn ? <div>{message}</div> : <div>{message}</div>}
             <button onClick={()=>this.change("false")}>change</button>
        </div>
           
            
        )
    }
}

export default Condition
