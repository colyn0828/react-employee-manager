import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../css/icons/Logo';

const HomePageStyles = styled.header`
    text-align: center;
    margin: 6rem auto 0;
    svg{
        width: 80px;
    }
    h1{
        font-size: 2.25rem;
    }
    p{
        color: #767484;
    }
`

const HomePage = () => {
    return (  
        <HomePageStyles>
            <Logo/>
            <h1>Employee Manager</h1>
            <p>focus on people and we'll focus on the paperwork</p>
        </HomePageStyles>
    );
}
 
export default HomePage;