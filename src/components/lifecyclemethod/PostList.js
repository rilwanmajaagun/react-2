import React, { Component } from 'react'
import axios from 'axios'

 class PostList extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              post:[]
              
         }
     }
   
     componentDidMount() {
         const url ="https://jsonplaceholder.typicode.com/posts"
        axios.get(url,)
        .then(response=>{
            console.log(response)
            this.setState({post: response.data})
        })
        .catch(error=>{
            console.log(error)
        })
     }
     
    render() {
            // {this.state.post.map((items, index)=>{
            //     return(
            //         <div key={index}>{items.title}</div>
            //     )
            // })}
        return ( <div>
            {this.state.post.map((items, index)=>{
                return(
                    <div key={index}>{items.title}</div>
                )
            })}
            </div>
        )
    }
}

export default PostList
