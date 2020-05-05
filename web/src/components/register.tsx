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
return (
        <BootStrap.Form>
            <BootStrap.Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Name
                </Form.Label>
                <Col sm="10">
                    <Form.Control placeholder={'Name'} onChange={(e) => {
                        if (/[a-z-A-Z]/.test(e.target.value)) {
                            setName(e.target.value)
                        }
                        else{
                            e.target.setCustomValidity('You need to have letters in your name')
                        }
                    }
                    } />
                </Col>
            </BootStrap.Form.Group>
            <BootStrap.Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    LastName
                </Form.Label>
                <Col sm="10">
                    <Form.Control placeholder={'Lastname'} onChange={(e) => {
                        if (/[a-z-A-Z]/.test(e.target.value)) {
                            e.target.setCustomValidity('')
                            setLastname(e.target.value)
                        }
                        else{
                            e.target.setCustomValidity('You need to have letters in your name')
                        }
                    }
                    } />
                </Col>
            </BootStrap.Form.Group>
            <BootStrap.Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Email
                </Form.Label>
                <Col sm="10">
                    <Form.Control placeholder={'Email'}  onChange={(e)=>{if(e.target.value.length>8 &&  /[0-9]/.test(e.target.value) && /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(e.target.value)){
                        e.target.setCustomValidity('')
                        setEmail(e.target.value)
                    }
                    else{
                        e.target.setCustomValidity('Your email needs to be no more than 8 characters and in needs to have a number and a special character(eg:!@#$%^&)')
                    }
                    }} />
                </Col>
            </BootStrap.Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Password" onChange={e=>{setPassword(e.target.value)}}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Confirm Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Password"    onChange={(e)=>{
                        if(e.target.value!=password){
                            e.target.setCustomValidity('')
                            e.target.setCustomValidity('Password and your password to Cornfirm arent the same')
                        }
                        else{
                            setConfirm_Password(e.target.value)
                        }
                    }}/>
                </Col>
            </Form.Group>
            <button onClick={()=>{
                if(name && password && email && confirm_password && lastname){
                registerUser()}
            else{
                alert('An input has not been filled')
            }}}>Send</button>
        </BootStrap.Form>)
}
export default Register