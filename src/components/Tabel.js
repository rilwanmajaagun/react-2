import React, { Component } from 'react'
import Greet from './Greet'


class Tabel extends Component {
    
    render() {
        return (
            <div>
                <table>
                    <tr>
                    <th>Name</th>
                    </tr>
                    <tr>
                    <td>John</td>
                    </tr>
                    <tr>
                    <td>Elsa</td>
                    </tr>
                    <Greet />
                </table>
            </div>
        )
    }
}

export default Tabel
