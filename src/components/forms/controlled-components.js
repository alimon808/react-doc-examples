// https://reactjs.org/docs/forms.html
// controlled components
import React from 'react';

export class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ name: event.target.value.toUpperCase() });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name)
    }

    render() {
        return (
            <form id="nameForm" onSubmit={this.handleSubmit}>
                <h3>Controlled Components</h3>
                <label>
                    Name: <input type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    };
}