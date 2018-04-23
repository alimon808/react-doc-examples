// https://reactjs.org/docs/conditional-rendering.html
// demo inline `if` with logical && opeator
import React from 'react';


export default function MailBox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h3>Hello!</h3>
            {
                unreadMessages.length > 0 &&
                <p>You have {unreadMessages.length} unread messages</p>
            }
        </div>
    );
}