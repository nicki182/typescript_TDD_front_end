import React, { Component } from 'react';
import * as BootStrap from 'react-bootstrap'
interface users {
    users:[{name:string,lastname:string,password:string}]
}
const Table:React.FunctionComponent<users>=(props)=>{
    return(
        <div>
            <BootStrap.Table striped bordered hover size="sm">
        <thead>
            <tr>
                <th>Name</th>
        <th>Last Name</th>
    <th>Password</th>
    </tr>
    </thead>
    <tbody>
    {props.users.map((users,index)=> {
        return (
            <tr key={index}>
                <td>{users.name}</td>
                <td>{users.lastname}</td>
                <td>{users.password}</td>
            </tr>
        )})}
    </tbody>
    </BootStrap.Table>
    </div>
)
}

export default Table;