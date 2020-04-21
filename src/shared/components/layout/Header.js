import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from '../../images/logo.svg'

export class Header extends Component {
    //Here you can define your PropTypes.\]
    static propTypes ={
        title: PropTypes.string.isRequired,
        url: PropTypes.string
    };
    render() {
    //     const { title = "welcome to React",
    // url = "http://localhost:3000"} = this.props;
        return (
            <div>
              <header className = "App-header">
                  <a href={this.props.url}>
                      <img src={logo} className ="App-logo" alt = "logo"/>
                  </a>
        <h1 className="App-title">{this.props.title}</h1>
              </header>
                
            </div>
        )
    }
}

export default Header
