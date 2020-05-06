import * as React from "react";
import { REGISTER_USER} from "./graphql/resolvers";
import {useMutation} from '@apollo/react-hooks'
import {FunctionComponent, useState} from "react";
import * as BootStrap from "react-bootstrap";
import {Col, Form, Row} from "react-bootstrap";
const Register:FunctionComponent=()=>{
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password,setConfirm_Password]=useState('')
    const [registerUser, { data, error,loading}] = useMutation(REGISTER_USER,{variables:{type: {name:name,lastname:lastname,email:email,password:password}}});
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.error(error);
        return <div>Error!</div>;
    }
    if(data){
      if(data.registerUser=="User registered successfully"){
          window.location.href='/PAGE'
      }
      else{
          alert(data.registerUser)
      }
      }
    const handleInputName=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if (/[a-z-A-Z]/.test(e.target.value)) {
            e.target.setCustomValidity('')
            setName(e.target.value)
        }
        else{
            e.target.setCustomValidity('You need to have letters in your name')
        }
    }
    const handleInputLastname=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if (/[a-z-A-Z]/.test(e.target.value)) {
            e.target.setCustomValidity('')
            setLastname(e.target.value)
        }
        else{
            e.target.setCustomValidity('You need to have letters in your name')
        }
    }
    const handleInputEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
            if (e.target.value.length>8 &&  /[0-9]/.test(e.target.value) && /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(e.target.value)) {
                e.target.setCustomValidity('')
                setEmail(e.target.value)
            }
            else{
                e.target.setCustomValidity('Email needs to be more than 8 characters long, needs to have a number and special characters(eg:!,(,),@)')
            }
        }
    const handleInputPassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
    }
    const handleInputConfirmPassword=(e:React.ChangeEvent<HTMLInputElement>)=> {
        if (e.target.value != password) {
            e.target.setCustomValidity('')
            e.target.setCustomValidity('Password and your password to Cornfirm arent the same')
        } else {
            setConfirm_Password(e.target.value)
        }
    }
    const handleClick=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        if(name && password && email && confirm_password && lastname){
            registerUser()}
        else{
            alert('An input has not been filled')
        }
    }
return (
        <BootStrap.Form>
            <BootStrap.Form.Group as={Row}>
                <Form.Label column sm="2">
                    Name
                </Form.Label>
                <Col sm="10">
                    <Form.Control placeholder='Name' id="name" onChange={handleInputName} value={name}/>
                </Col>
            </BootStrap.Form.Group>
            <BootStrap.Form.Group as={Row}>
                <Form.Label column sm="2">
                    LastName
                </Form.Label>
                <Col sm="10">
                    <Form.Control placeholder='Lastname' id="lastname" onChange={handleInputLastname} value={lastname}/>
                </Col>
            </BootStrap.Form.Group>
            <BootStrap.Form.Group as={Row}>
                <Form.Label column sm="2">
                    Email
                </Form.Label>
                <Col sm="10">
                    <Form.Control placeholder='Email'  id="email" onChange={handleInputEmail} value={email}/>
                </Col>
            </BootStrap.Form.Group>
            <Form.Group as={Row} >
                <Form.Label column sm="2">
                    Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Password" id="password" onChange={handleInputPassword} value={password}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="2">
                    Confirm Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Confirm Password" id="confirm_password"   onChange={handleInputConfirmPassword} value={confirm_password}/>
                </Col>
            </Form.Group>
            <button onClick={handleClick}>Send</button>
        </BootStrap.Form>
)
}
export default Register