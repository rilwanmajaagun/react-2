import React,{ useState } from 'react'
import Message from './Message'

const Form2 = (props) => {
    const [state, setState] = useState({
        name:"",
        job:"",
        income:"",
        fruit:""
    })
    const handleChange =e=>{
        setState({...state,
            [e.target.name]: e.target.value
        })
    }
    const submitForm = (e)=>{
        e.preventDefault ()
        console.log(state)
        setState({
            name:"",
            job:"",
            income:"",
            fruit:""
        })
    }
    return (
        <form onSubmit={submitForm}>
            <input type="text" name="name" value={state.name} onChange={handleChange} placeholder="name"/>
            <input type="text" name="job" value={state.job} onChange={handleChange} placeholder="job"/>
            <input type="text" name="income" value={state.income} onChange={handleChange} placeholder="income"/>
            <select value={state.fruit} name="fruit" onChange={handleChange}>
                <option value="grapefruit">grapefruit</option>
                <option value="lemon">lemon</option>
                <option value="apple">apple</option>
                <option value="mango">mango</option>
            </select>
            <button type="submit">submit</button>
        </form>
    )
}

export default Form2
