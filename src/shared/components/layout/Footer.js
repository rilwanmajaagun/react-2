import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
                <footer>
                    &copy; Rilwan Code {(new Date().getFullYear())}
                </footer>
        )
    }
}

export default Footer
