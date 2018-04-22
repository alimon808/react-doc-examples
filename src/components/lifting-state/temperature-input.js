import React from 'react';

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
        const temperature = this.props.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input type="number" value={parseFloat(temperature)} onChange={this.handleChange} />
            </fieldset>
        );
    }
}