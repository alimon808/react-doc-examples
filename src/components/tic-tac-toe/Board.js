import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

export default class Board extends React.Component {
    renderSquare(i) {
        let selectedSquare;
        if (this.props.winningLine) {
            selectedSquare = this.props.winningLine.includes(i);
        } else {
            selectedSquare = this.props.selectedSquare === i;
        }
        return <Square key={i} selected={selectedSquare} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
    }

    render() {
        let squares = [];
        for (var i = 0; i < 9; i++) {
            let row = [];
            for (var j = i; j < i + 3; j++) {
                row.push(this.renderSquare(j));
            }
            squares.push(
                <div key={i} className="board-row">
                    {row}
                </div>
            );
            i = j - 1;
        }
        return (
            <div>
                {squares}
            </div>
        );
    }
}

Board.propTypes = {
    winningLine: PropTypes.array,
    selectedSquare: PropTypes.number,
    squares: PropTypes.array,
    onClick: PropTypes.func
};
