import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
    const history = useHistory();
    const routeToOrganizer = () => {
        history.push('/organizer');
    }
    const routeToGuest = () => {
        history.push('/guest');
    }

    return (
        <div>
            <div>
                <h2>Organizing a potluck?</h2>
                <button onClick={routeToOrganizer}>Sign up here</button>
            </div>
            <div>
                <h2>Invited to a potluck?</h2>
                <button onClick={routeToGuest}>Guest login</button>
            </div>
        </div>
    )
}