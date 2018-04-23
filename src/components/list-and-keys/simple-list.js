import React from 'react';
import ListItem from './list-item';

export default function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => <ListItem key={number.toString()} value={number * 2} />);
    return (
        <ul>
            {listItems}
        </ul>
    );
}