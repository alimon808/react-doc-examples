// https://reactjs.org/docs/conditional-rendering.html
// prevent component from rendering by returning null

import React from 'react';
import WarningBanner from './warning-banner';

export default class Warning extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({ showWarning: !prevState.showWarning }));
    }
    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleClick}>{this.state.showWarning ? 'Hide Warning' : 'Show Warning'}</button>
            </div>
        );
    }
}