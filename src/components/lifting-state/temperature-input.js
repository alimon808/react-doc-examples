import React from 'react';
import PropTypes from 'prop-types';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

export default class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onTemperatureChange(event.target.value);
    }

    render() {
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input type="text" value={parseFloat(this.props.temperature) || ''} onChange={this.handleChange} />
            </fieldset>
        );
    }
}

TemperatureInput.propTypes = {
    temperature: PropTypes.string.isRequired,
    scale: PropTypes.string.isRequired,
    onTemperatureChange: PropTypes.func.isRequired
};