import * as React from "react";
import { REGISTER_USER} from "./graphql/resolvers";
import {useMutation} from '@apollo/react-hooks'
import {FunctionComponent, useState} from "react";
import * as BootStrap from "react-bootstrap";
import {Col, Form, Row} from "react-bootstrap";
const Register:FunctionComponent=()=>{
    const [name, setName] = useState({value:'',validity:false});
    const [lastname, setLastname] = useState({value:'',validity:false});
    const [email, setEmail] = useState({value:'',validity:false});
    const [password, setPassword] = useState({value:'',validity:false});
    const [confirm_password,setConfirm_Password]=useState({value:'',validity:false})
    const [registerUser, { data, error,loading}] = useMutation(REGISTER_USER,{variables:{type: {name:name,lastname:lastname,email:email,password:password}}});
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.error(error);
        alert('There has been an error connection try latter on')
        window.location.href='/'
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
            setName({value:e.target.value,validity:true})
        }
        else{
            setName({value:e.target.value,validity: false})
            e.target.setCustomValidity('You need to have letters in your name')
        }
    }
    const handleInputLastname=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if (/[a-z-A-Z]/.test(e.target.value)) {
            e.target.setCustomValidity('')
            setLastname({value:e.target.value,validity:true})
        }
        else{
            e.target.setCustomValidity('You need to have letters in your name')
            setLastname({value:e.target.value,validity:false})
        }
    }
    const handleInputEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
            if (e.target.value.length>8 &&  /[0-9]/.test(e.target.value) && /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(e.target.value)) {
                e.target.setCustomValidity('')
                setEmail({value:e.target.value,validity:true})
            }
            else{
                e.target.setCustomValidity('Email needs to be more than 8 characters long, needs to have a number and special characters(eg:!,(,),@)')
                setEmail({value:e.target.value,validity:false})
            }
        }
    const handleInputPassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setPassword({value:e.target.value,validity:true})
    }
    const handleInputConfirmPassword=(e:React.ChangeEvent<HTMLInputElement>)=> {
        if (e.target.value != password.value) {
            setConfirm_Password({value:e.target.value,validity:false})
            e.target.setCustomValidity('Password and your password to Cornfirm arent the same')
        } else {
            e.target.setCustomValidity('')
            setConfirm_Password({value:e.target.value,validity:true})
        }
    }
    const handleClick=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        if(name.validity && password.validity && email.validity && confirm_password.validity && lastname.validity){
            registerUser()}
        else{
            alert('An input has not been filled or completed incorrectly')
        }
    }
return (
        <BootStrap.Form>
            <BootStrap.Form.Group as={Row}>
                <Form.Label column sm="2">
                    Name
                </Form.Label>
                <Col sm="10">
                    <Form.Control placeholder='Name' id="name" onChange={handleInputName} value={name.value}/>
                </Col>
            </BootStrap.Form.Group>
            <BootStrap.Form.Group as={Row}>
                <Form.Label column sm="2">
                    LastName
                </Form.Label>
                <Col sm="10">
                    <Form.Control placeholder='Lastname' id="lastname" onChange={handleInputLastname} value={lastname.value}/>
                </Col>
            </BootStrap.Form.Group>
            <BootStrap.Form.Group as={Row}>
                <Form.Label column sm="2">
                    Email
                </Form.Label>
                <Col sm="10">
                    <Form.Control placeholder='Email' id="email" onChange={handleInputEmail} value={email.value}/>
                </Col>
            </BootStrap.Form.Group>
            <Form.Group as={Row} >
                <Form.Label column sm="2">
                    Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Password" id="password" onChange={handleInputPassword} value={password.value}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="2">
                    Confirm Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Confirm Password" id="confirm_password"   onChange={handleInputConfirmPassword} value={confirm_password.value}/>
                </Col>
            </Form.Group>
            <button onClick={handleClick}>Send</button>
        </BootStrap.Form>
)
}
export default Register