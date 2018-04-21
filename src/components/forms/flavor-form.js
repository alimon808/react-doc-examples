// https://reactjs.org/docs/forms.html
// select tag
import React from 'react';

export default class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { flavor: 'coconut' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ flavor: event.target.value });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is ' + this.state.flavor);
        event.preventDefault();
    }
    render() {
        return (
            <form id="flavorForm" onSubmit={this.handleSubmit}>
                <h3>Flavor Form </h3>
                <label>
                    Pick your favorite La Croix flavor:
                    <select value={this.state.flavor} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}