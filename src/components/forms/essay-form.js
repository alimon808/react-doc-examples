// https://reactjs.org/docs/forms.html
// textarea tag
import React from 'react';

export class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { essay: 'Please write an essay about your favorite DOM element.' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ essay: event.target.value });
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.essay);
        event.preventDefault();
    }
    render() {
        return (
            <form id="essayForm" onSubmit={this.handleSubmit}>
                <h3>Essay Form</h3>
                <label>
                    Essay: <textarea value={this.state.essay} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}