import React from 'react';

export default function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => <li>{number * 2}</li>);
    return (
        <ul>
            {listItems}
        </ul>
    );
}