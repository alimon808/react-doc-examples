// https://reactjs.org/docs/conditional-rendering.html
// conditionally render part of an element
import React from 'react';
import Greeting from './greeting';
import LoginButton from './login-button';
import LogoutButton from './logout-button';

export default class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: true };
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        const button = isLoggedIn ?
            <LogoutButton onClick={this.handleLogoutClick} /> : <LoginButton onClick={this.handleLoginClick} />
        return (
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                {button}
            </div>
        );
    }
}