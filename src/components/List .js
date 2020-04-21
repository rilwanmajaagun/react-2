import React from 'react'
import './Mystyle.css'
function List () {
    const name = ["kolade", "rilwan ", "majaagun"]
    let newName = name.sort().lastIndexOf("kolade")
    name.splice(2,0,"oyinkan")
    let newNames = name.slice(1,3)
    return (
        <div>
        {
            name.map((items, index )=> {return <h2 key = {index + 1} className= 'primary'> {index} my name is {items}</h2>})
        }
        <p>{newName}</p>
        <p>{newNames}</p>
        </div>
    )
}

export default List 
