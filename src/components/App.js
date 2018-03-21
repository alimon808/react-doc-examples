import React from 'react';
import HelloWorld from './hello-world/HelloWorld';
import TicTacToe from './tic-tac-toe/TicTacToe';
import Clock from './clock/Clock.js';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <HelloWorld />
                <TicTacToe />
                <Clock />
            </div>
        );
    }
}