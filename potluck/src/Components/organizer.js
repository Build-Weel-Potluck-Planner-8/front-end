import React, { useState, useEffect } from 'react';
import schema from '../Validation/organizerSchema';
import * as yup from 'yup';
import axios from 'axios';

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
        <form onSubmit={onSubmit}>
            <div>
                <h2>Let's get this potluck started!</h2>
                <p>Please enter the details of the potluck and the organizer</p>
            </div>

            <div>
                <div>{formErrors.host}</div>
                <div>{formErrors.potluck}</div>
                <div>{formErrors.date}</div>
                <div>{formErrors.time}</div>
                <div>{formErrors.location}</div>
                <div>{formErrors.items}</div>
                <div>{formErrors.guests}</div>
            </div>

            <div>
                <label>
                    Host's Name
                </label>    
                <input 
                    value={formValues.host}
                    onChange={onChange}
                    name='host'
                    type='text'
                />
                
                <label>
                    Potluck Name
                </label>    
                <input 
                    value={formValues.potluck}
                    onChange={onChange}
                    name='potluck'
                    type='text'
                />
                
                <label>
                    Date
                </label>    
                <input 
                    value={formValues.date}
                    onChange={onChange}
                    name='date'
                    type='date'
                />
                
                <label>
                    Time
                </label>    
                <input 
                    value={formValues.time}
                    onChange={onChange}
                    name='time'
                    type='time'
                />
                
                <label>
                    Location
                </label>
                <input 
                    value={formValues.location}
                    onChange={onChange}
                    name='location'
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
                    Guests
                    <p>please separate each guest with a comma</p>
                </label>
                <input 
                    value={formValues.guests}
                    onChange={onChange}
                    name='guests'
                    type='text'
                />
            </div>
            <button disabled={disabled}>Let the fun times begin!</button>
        </form>
    )
}