import React, { Component } from 'react'
import './Mystyle.css'
import Popup from "react-popup"


 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              Username: "",
              Comments: '',
              Topic: 'react'
         }
     }
     handleUsernamechage = (event) =>{
        this.setState({
            Username: event.target.value
            
        });
     }
     handeleCommentChange =(event)=>{
        this.setState({
            Comments: event.target.value
        });
    }
    handleTopicchage = (event)=>{
        this.setState({
            Topic: event.target.value
        })
    }
    handleSubmit= (event) =>{
        event.preventDefault()
        this.setState({
            Username:''
        })
        Popup.create({
            title: 'person info',
            content:(
                <div>
                    <p>Name: {this.state.Username}</p>
                </div>
            ),
            buttons:{
                right:[{
                    text:"close",
                    action: popup => popup.close
                }]
            }
        })
    }
  
    render() {

        const {Username, Comments, Topic} = this.state

        return (

            <form onSubmit={this.handleSubmit} className='form'>
                <div>
                    <label>Username</label>
                    <input type= 'text' value={Username} onChange={this.handleUsernamechage}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={Comments} onChange={this.handeleCommentChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={Topic} onChange={this.handleTopicchage}>
                        <option value= "react">React</option>
                        <option value= "vue">vue.js</option>
                        <option value= "Angular">Angular</option>
                    </select>
                </div>
                <button type="submit">submit</button>
            </form>
           
        )
    }
}

export default Form

