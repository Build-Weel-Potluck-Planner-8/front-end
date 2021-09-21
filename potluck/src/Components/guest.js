import React, { useState, useEffect } from 'react';
import schema from '../Validation/guestSchema';
import * as yup from 'yup';
import axios from 'axios';

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
        <form onSubmit={onSubmit}>
            <div>
                <h2>Remember proper guest etiquette!</h2>
                <p>Always bring a dish to a potluck</p>
            </div>

            <div>
                <div>{formErrors.invitee}</div>
                <div>{formErrors.items}</div>
            </div>

            <div>
                <label>
                    Guest Name
                </label>
                <input 
                    value={formValues.invitee}
                    onChange={onChange}
                    name='invitee'
                    type='text'
                />

                <label>
                    Plus one(s)?
                    <p>please separate each plus one with a comma</p>
                </label>
                <input 
                    value={formValues.plusOne}
                    onChange={onChange}
                    name='plusOne'
                    type='text'
                />

                <label>
                    Items
                    <p>please separate each item with a comma</p>
                </label>
                <input 
                    value={formValues.items}
                    onChange={onChange}
                    name='items'
                    type='text'
                />
                
                <label>
                    Special Requests
                    <p>fulfillment of special requests are entirely up to the host</p>
                </label>
                <input 
                    value={formValues.other}
                    onChange={onChange}
                    name='other'
                    type='text'
                />
            </div>
            <button disabled={disabled}>Let the fun times begin!</button>
        </form>
    )
}