// https://reactjs.org/docs/composition-vs-inheritance.html

import React from 'react';
import './fancy-border.css';

export default function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}