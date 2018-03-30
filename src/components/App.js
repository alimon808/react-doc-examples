import React from 'react';
import HelloWorld from './hello-world/HelloWorld';
import TicTacToe from './tic-tac-toe/TicTacToe';
import Clock from './clock/Clock.js';
import Welcome from './welcome/Welcome';
import Comment from './comment/Comment';
import FilterableProductTable from './filterable-product-table/FilterableProductTable';

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://localhost:3000/kitty.jpeg'
    }
};

export default class App extends React.Component {
    render() {
        return (
            <div>
                <HelloWorld />
                <Welcome name="Sara" />
                <TicTacToe />
                <Clock />
                Comments:
                <Comment
                    date={comment.date}
                    text={comment.text}
                    author={comment.author}
                />
                <hr />
                <FilterableProductTable />
            </div>
        );
    }
}