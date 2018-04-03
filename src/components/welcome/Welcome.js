import React from 'react';
import WelcomeDialog from '../composition-vs-inheritance/WelcomeDialog';

export default function Welcome(props) {
    return (
        <div>
            <WelcomeDialog name={props.name} title={props.title} />
        </div>
    );
}