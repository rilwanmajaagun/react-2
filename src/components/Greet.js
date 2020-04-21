import React from "react"
import { Link, useRouteMatch } from "react-router-dom"

const Greet = (props) => {
    let { path, url } = useRouteMatch();
    return <h1>
        Hello {props.name} is {props.age}
        <Link to={`${url}/counter`}>Message</Link>
        <Link to = "/counter">counter</Link>
    </h1>
}

export default Greet

