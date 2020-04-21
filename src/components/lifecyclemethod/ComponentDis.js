import React, { Component } from 'react'

export class ComponentDis extends Component {
    constructor(props) {
        super(props)
    
        this.state = { 
            color:"blue"             
        }
    }
    static getDerivedStateFromProps(props, state){
        return{color:props.color}
    }
    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({
    //             color: "yellow"
    //         })
    //     }, 1000);
    // }
    // shouldComponentUpdate(){
    //     return true;
    // }
    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     document.getElementById("colorsName").innerHTML=
    //     "before state"+'  '+ prevState.color
    // }
    // componentDidUpdate(){
    //     document.getElementById("update").innerHTML=`update is ${this.state.color}`
    // // }
    render() {
        return (
            <div>
                {this.state.color}
                <div  id="colorsName"></div>
                <p id="update"></p>
            </div>
        )

    }
}

export default ComponentDis
