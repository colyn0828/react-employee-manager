import React, { useState } from 'react';
import styled from 'styled-components';
import {Redirect} from 'react-router-dom';
import firebaseApp from '../firebase/firebaseConfig.js';

import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button'

const RegisterPageStyles = styled.aside `
    width: 480px;
    margin: 6rem auto 0;
    header {
        text-align: center;
    }
    h2 {
        font-size: 2rem;
        font-weight: 700;
    }
    button{
        margin-top: 3rem;
    }
`

const RegisterPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] =  useState('');
    const [hasFinished, setHasFinished] = useState(false);

    function handleNewAccount (){
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential=> {
            setHasFinished(true);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    if(hasFinished){
        return <Redirect to="/login" />
    } else {
        return ( 
            <RegisterPageStyles>
            <header>
                <h2>Unlimited Free Trial Sign Up</h2>
                <p>no credit card required</p>
            </header>
            <FormInput label="name on account" type="text"/>
            <FormInput label="valid email address" type="email" onChange = {(e)=> setEmail(e.target.value.trim())}/>
            <FormInput label="password (min 6 characters)" type="password" onChange={(e)=>setPassword(e.target.value.trim())}/>
            <Button className = "create-accounts" label="create a free account" uiStyle="signup" onClick = {handleNewAccount}/>
            </RegisterPageStyles>
         );
    }   
}
 
export default RegisterPage;