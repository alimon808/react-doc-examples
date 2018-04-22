import React from 'react';

export default class Reservration extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isGoing: false, numberOfGuests: 2 };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            // computed property name
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
            [name]: value
        });

        // ES5 equivalent
        // var partialState = {};
        // partialState[name] = value;
        // this.setState({partialState});
    }

    render() {
        return (
            <form>
                <h3>Reservation Form</h3>
                <label>
                    Is Going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of Guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}