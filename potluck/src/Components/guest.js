import React, { useState, useEffect } from 'react';
import schema from '../Validation/guestSchema';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

//css styles
const StyledDiv = styled.div`
    margin: 0 5%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 7%;
    background-image: url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');
    background-size: cover;
    background-repeat: no-repeat;
    height: 800px;
    max-width:100%;
    

    form {
        background-color: white;
        opacity: 90%;
        border: 2px solid orange;
        border-radius: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 50%;
        width: 43%
        
    }  
    h2 {
        
        justify-content: center;
        width: 100%;
        color: green;
        text-align: center;
        padding-top: 0%;
        padding-bottom: 0%;
        text-shadow: 1px 1px orange;
        text-decoration: underline;
        margin-bottom:3.5%;
        margin-top: -8%;
    }
    .subText {
       margin-top: -2%;
       text-align: center;
       font-size: 0.9rem;
       margin-bottom:4.3%;
    }
    p {
        font-size: 0.8rem;
        text-align: center;
    }
    .error{
        color:red;
    }
    .name{
        align-items: center;
        display: flex;
        justify-content:center;
        padding: 0 12%;
        margin-bottom: 2%;
        margin-top: 1%;
    }
    input[type=text] {
        border-radius: 7px;
        margin-left: 5%;
        
    }
    .plusOne {
        display: flex;
        justify-content: center;
        margin-bottom:-2%;
        padding-top:1%;
        margin-right:0.5%;
    }
    .items {
        display:flex;
        justify-content: center;
        margin-right:-7.9%;
    }
    .special {
        display:flex;
        justify-content: center;
        margin-right: 7.5%;
    }
    .button{
        diplay:flex;
        justify-content:center;
       text-align:center;
       margin-top:5%;
       margin-bottom:-5%;
    }
    button:hover:enabled {
        transition: all 1s;
        transform: scale(1.2);
        background-color: black;
        color: crimson;
    }

   
`

//Setting up initial values
const initialFormValues = {
    invitee: '',
    plusOne: [],
    items: [],
    other: ''
}

const initialFormErrors = {
    invitee: '',
    items: ''
}

const initialDisabled = true

export default function Guest() {

    //setting up state
    
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    //Helper functions

    const PostNewGuest = newGuest => {
        axios.post('http://reqres.in/api/potluck/guests')
            .then(res => {
                console.log(res.data);
            }).catch(err => console.error(err))
    }

    const validate = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => setFormErrors({ ...formErrors, [name]: '' }))
            .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
    }

    const inputChange = (name, value) => {
        validate(name, value);
        setFormValues({ ...formValues, [name]: value })
    }

    const formSubmit = () => {

        const newGuest = {
            invitee: formValues.invitee.trim(),
            plusOne: formValues.plusOne.split(','),
            items: formValues.items.split(','),
            other: formValues.other
        }

        PostNewGuest(newGuest);
        setFormValues(initialFormValues);
    }

    useEffect(() => {
        schema.isValid(formValues).then(valid => {setDisabled(!valid)})
    }, [formValues])

    const onSubmit = e => {
        e.preventDefault();
        formSubmit()
    }

    const onChange = e => { 
        const { name, value } = e.target;
        inputChange(name, value)
    } 

    return (
    <StyledDiv>
        <form onSubmit={onSubmit}>
            <div>
                <h2>Guest Form</h2>
                <div className = 'subText'>
                <p>Always bring a dish to a potluck and remember proper guest etiquette!</p>
                </div>
            </div>

            <div>
                <div className='error'>{formErrors.invitee}</div>
                <div className='error'>{formErrors.items}</div>
            </div>

            <div>
                <div className='name'>
                <label>
                    Guest Name:       
                </label>
                <input 
                    value={formValues.invitee}
                    onChange={onChange}
                    name='invitee'
                    type='text'
                />
                </div>
                <div className='plusOne'>
                <label>
                    Plus one(s)?
                </label>
                <input 
                    value={formValues.plusOne}
                    onChange={onChange}
                    name='plusOne'
                    type='text'
                />
                </div>
                <p>(please separate each plus one with a comma)</p>
                <div className='items'>
                <label>
                    Items:
                </label>
                <input 
                    value={formValues.items}
                    onChange={onChange}
                    name='items'
                    type='text'
                />
                </div>
                <p>(please separate each item with a comma)</p>
                <div className='special'>
                <label>
                    Special Requests:
                </label>
                <input 
                    value={formValues.other}
                    onChange={onChange}
                    name='other'
                    type='text'
                />
                </div>
                <p>(fulfillment of special requests are entirely up to the host)</p>
            </div>
            <div className='button'>
            <button disabled={disabled}>Let the fun times begin!</button>
            </div>
        </form>
    </StyledDiv>
    )
}