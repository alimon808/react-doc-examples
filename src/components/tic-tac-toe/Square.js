import React from 'react';

export default class Square extends React.Component {
    render() {
        const className = this.props.selected ? 'square-highlighted' : 'square';
        return (
            <button className={className} onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}