import React from 'react';
import HelloWorld from './hello-world/HelloWorld';
import TicTacToe from './tic-tac-toe/TicTacToe'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <HelloWorld />
                <TicTacToe />
            </div>
        );
    }
}