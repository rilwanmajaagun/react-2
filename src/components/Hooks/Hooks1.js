import React, { useState, useEffect } from 'react'

const Hooks1 = () => {
    const [name, setName] = useState("")
    const changeName =(e)=>{
        setName(
            [e.target.name]=e.target.value
        )
    }
    const setSelect =(e)=>{
        e.target.setSelectionRange(0, e.target.value.lenght)
    }
    useEffect(() => {
        setName("kolade")
    }, [name])

    return (
        <label>
           <input name="name" value={name} onChange={changeName} placeholder="untitled" onClick={setSelect}/>
        </label>
    )
}

export default Hooks1
