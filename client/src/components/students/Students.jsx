import React from "react"

function Students(props) {
    return (
        <div>
            <h3>Name: {props.Name}</h3>
            <h3>Id: {props.id}</h3>
            <h3>Branch: {props.Branch}</h3>
            <h3>Email: {props.Email}</h3>
            <h3>DOB: {props.DOB}</h3>
            <h3>Interest: {props.Interest}</h3>
            <hr/>
        </div>
    )
}

export default Students