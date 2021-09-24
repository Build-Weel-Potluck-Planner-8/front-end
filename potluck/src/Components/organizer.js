import React, { useState, useEffect } from 'react';
import schema from '../Validation/organizerSchema';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

//css stylings:
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
        justify-items: center;
        height: 60%;
        width: 43%
    }  
    h2 {
        width: 100%;
        color: crimson;
        text-align:center;
        text-shadow: 1px 1px orange;
        text-decoration: underline;
    }
    .subText {
        text-align: center;
        font-size: 0.9rem;
     }
     p {
         margin-top:0%;
        font-size: 0.8rem;
        text-align: center;
    }
    .error{
        color:red;
    }
    input[type=text] {
        border-radius: 7px;
        margin: 1% 22% 1% 5%;
    }
    input[type=time]{
        padding:0 5%;
        border-radius: 7px;
        margin: 1% 22% 1% 5%;
    }
    input[type=date]{
        border-radius: 7px;
        margin: 1% 22% 1% 5%;
    }
    .host {
        align-items:center;
        display:flex;
        justify-content: flex-end;
    }
    .potluck {
        align-items:center;
        display:flex;
        justify-content:flex-end;
    }
    .date {
        align-items:center;
        display:flex;
        justify-content:flex-end;
    }
    .time{
        align-items:center;
        display:flex;
        justify-content:flex-end;
    }
    .location{
        align-items:center;
        display:flex;
        justify-content:flex-end;
    }
    .items{
        align-items:center;
        display:flex;
        justify-content:flex-end;
    }
    .guests{
        align-items:center;
        display:flex;
        justify-content:flex-end;
    }
    .button{
        display:flex;
        justify-content:center;
       text-align:center;
    }
    button:hover:enabled {
        transition: all 1s;
        transform: scale(1.2);
        background-color: black;
        color: green;
    }
    .errors {
        color:red;
        font-size:0.65rem;
        text-align:center;
    }

`
//setting up initial values
// const initialOrganizer = []

const initialFormValues = {
    host: '',
    potluck: '',
    date: '',
    time: '',
    location: '',
    items: [],
    guests: []
}

const initialFormErrors = {
    host: '',
    potluck: '',
    date: '',
    time: '',
    location: '',
    items: '',
    guests: ''
}

const initialDisabled = true

export default function Organizer() {

    //setting up state
    // const [organizer, setOrganizer] = useState(initialOrganizer)
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    //creating helper functions
    
    //This function to be filled when connecting to an API
    //for now it pushes data to an empty array
    //pushing data to mocked api through reqres.in
    const postNewPotluck = newPotluck => {
        axios.post('https://reqres.in/api/potluck', newPotluck)
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

        const newPotluck = {
            host: formValues.host.trim(),
            potluck: formValues.potluck.trim(),
            date: formValues.date,
            time: formValues.time,
            location: formValues.location,
            items: formValues.items.split(','),
            guests: formValues.guests.split(',')
        }

        postNewPotluck(newPotluck);
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
                <h2>Potluck Organizer Form</h2>
                <div className = 'subText'>
                <p>Please enter the your details and let's get this potluck started!</p>
                </div>
            </div>

            <div className='errors'>
                <div>{formErrors.host}</div>
                <div>{formErrors.potluck}</div>
                <div>{formErrors.date}</div>
                <div>{formErrors.time}</div>
                <div>{formErrors.location}</div>
                <div>{formErrors.items}</div>
                <div>{formErrors.guests}</div>
            </div>

            <div>
                <div className='host'>
                <label>
                    Host's Name:
                </label>    
                <input 
                    value={formValues.host}
                    onChange={onChange}
                    name='host'
                    type='text'
                />
                </div>
                <div className='potluck'>
                <label>
                    Potluck Name:
                </label>    
                <input 
                    value={formValues.potluck}
                    onChange={onChange}
                    name='potluck'
                    type='text'
                />
                </div>
                <div className='date'>
                <label>
                    Date:
                </label>    
                <input 
                    value={formValues.date}
                    onChange={onChange}
                    name='date'
                    type='date'
                />
                </div>
                <div className='time'>
                <label>
                    Time:
                </label>    
                <input 
                    value={formValues.time}
                    onChange={onChange}
                    name='time'
                    type='time'
                />
                </div>
                <div className='location'>
                <label>
                    Location:
                </label>
                <input 
                    value={formValues.location}
                    onChange={onChange}
                    name='location'
                    type='text'
                />
                </div>
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
                <div className='guests'>
                <label>
                    Guests:
                </label>
                <input 
                    value={formValues.guests}
                    onChange={onChange}
                    name='guests'
                    type='text'
                />
                </div>
                <p>(please separate each guest with a comma)</p>
            </div>
            <div className='button'>
            <button disabled={disabled}>Let the fun times begin!</button>
            </div>
        </form>
        </StyledDiv>
    )
}