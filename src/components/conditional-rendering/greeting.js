import React from 'react';
import UserGreeting from './user-greeting';
import GuestGreeting from './guest-greeting';

export default function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }

    return <GuestGreeting />;
}