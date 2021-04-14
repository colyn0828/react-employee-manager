import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import {Redirect} from 'react-router-dom';

import firebaseApp from './../firebase/firebaseConfig';
import AuthContext from './../auth/AuthContext';

import FormInput from './../components/forms/FormInput';
import Button from './../components/buttons/Button';
// import Button from 'components/buttons/Button';

const LoginPageStyles = styled.aside`
    width: 380px;
    margin: 6rem auto 0;
    header {
        text-align: center;
    }
    h2 {
        font-size: 2rem;
        font-weight: 700;
    }
`

const LoginPage = (props) => {
    const auth = useContext(AuthContext);
    const [email, setEmail] = useState('colyngao@gmail.com');
    const [password, setPassword] = useState('123456');
    const [isValid, setIsValid] = useState(false);

    console.log('render');
    console.log(auth);

    const handleClick = (e) =>{
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential=>{
            auth.isUser = true
            setIsValid(true)
            // email and password input
            // console.log(userCredential.user.email);
            // console.log(userCredential.user.uid);
            // console.log(userCredential.user.displayName);
            // console.log(userCredential.user.emailVerified);
        })
        .catch(error=>{
            console.log(error.code);
            console.log(error.message);
        })
    }

    // conditional rendering
    if(isValid){
        return <Redirect to="/dashboard"/>
    }else{
        return (
            <>
                <LoginPageStyles>
                    <header>
                        <h2>Login Page</h2>
                        <p>no credit card required</p>
                    </header>
                    <FormInput label="enter a valid email address" type="email" onChange={(e)=>setEmail(e.target.value.trim())}/>
                    <FormInput label="enter a valid password (min 6 characters)" type="password" onChange={(e)=>setPassword(e.target.value.trim())}/>
                    <Button className="login" label="login account" uiStyle="login" onClick={handleClick}/>
                </LoginPageStyles>
            </>
        );
    }
}

export default LoginPage;