import React, { Component } from 'react'
import './Home.css'
export class Home extends Component {
    render() {
        const buttonStyle={
            backgroundColor:'gray',
            border:'1px solid black'
        }
        return (
            <div className="Home">
                <h1>I'm Home Component</h1>
                <p>In this recipe your will learn how to add styles to componemts. if you want to learn more you cn visit our Youtube channel at  <a href="http://youtube.com/codejobs">codejobs</a>
                </p>
                <p>
                <button style={buttonStyle}> Click me!</button>
                </p>
            </div>
        )
    }
}

export default Home
