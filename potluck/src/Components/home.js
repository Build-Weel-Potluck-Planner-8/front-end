import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: 0 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');
    background-size: cover;
    background-repeat: no-repeat;
    height: 800px;

    div {
        border: 2px solid black;
        padding: 10% 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .left{
        margin-left: 15%;
        background-color: crimson;
        opacity: 80%;
        border-radius: 50px;
    }

    .left h2 {
        margin-bottom: 30%;
        border: 2px solid black;
        color: green;
        border-radius: 20px;
        padding: 4% 1%;
        background-color: white;
        text-align: center;
    }

    .left button{
        padding: 5% 0;
        font-weight: 800;
        color: green;
        border-radius: 20px;
        background-color: white;
        &:hover {
            transition: all 1s;
            transform: scale(1.2);
            background-color: black;
            color: crimson;
        }
    }

    .right {
        margin-right: 15%;
        background-color: green;
        opacity: 80%;
        border-radius: 50px;
    }

    .right h2 {
        margin-bottom: 30%;
        border: 2px solid black;
        color: crimson;
        border-radius: 20px;
        padding: 4% 1%;
        text-align: center;
        background-color: white;
    }

    .right button{
        padding: 5% 0;
        font-weight: 800;
        color: crimson;
        border-radius: 20px;
        background-color: white;
        &:hover {
            transition: all 1s;
            transform: scale(1.2);
            background-color: black;
            color: green;
        }
    }
`

export default function Home() {
    const history = useHistory();
    const routeToOrganizer = () => {
        history.push('/organizer');
    }
    const routeToGuest = () => {
        history.push('/guest');
    }

    return (
        <StyledDiv>
            <div className='left'>
                <h2>Organizing a potluck?</h2>
                <button onClick={routeToOrganizer}>Sign up here</button>
            </div>
            <div className='right'>
                <h2>Invited to a potluck?</h2>
                <button onClick={routeToGuest}>Guest login</button>
            </div>
        </StyledDiv>
    )
}