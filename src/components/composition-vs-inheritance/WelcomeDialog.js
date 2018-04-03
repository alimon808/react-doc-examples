// https://reactjs.org/docs/composition-vs-inheritance.html

import React from 'react';
import TicTacToe from '../tic-tac-toe/TicTacToe';
import FancyBorder from './FancyBorder';

export default function WelcomeDialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                Hello, {props.name}.  Would you like to play a game?
            </p>
            <TicTacToe />
        </FancyBorder>
    );
}