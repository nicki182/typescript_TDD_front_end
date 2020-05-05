import * as React from 'react'
import {FILTER_USER} from "./graphql/resolvers";
import {useLazyQuery} from '@apollo/react-hooks'
import {FunctionComponent, useState} from "react";
import * as BootStrap from "react-bootstrap";
import {Col, Form, Row} from "react-bootstrap";
interface UsersUpdate {
    UsersUpdate:React.Dispatch<React.SetStateAction<[{name:string,lastname:string,password:string}]>>
}
const Search_User:FunctionComponent<UsersUpdate>=({UsersUpdate:UsersUpdate})=>{
    const[user,setUser]=useState('')
    const[filterUser, { loading, error, data }] = useLazyQuery(FILTER_USER,{
        variables: {name:user}});
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.error(error);
        return <div>Error!</div>;
    }
    if(data){
        UsersUpdate(data.filterUser)
    }
    return(
        <div>
            <input
                onChange={event => setUser(event.target.value)}
                placeholder="search user"
            />
            <button type="submit" onClick={()=>user && filterUser()} className = "search users">filter</button>
        </div>
    )
}
export default Search_User