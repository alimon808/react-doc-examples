// https://reactjs.org/docs/typechecking-with-proptypes
import React from 'react';
import PropTypes from 'prop-types';
import Props from './props';
import Message from './message';

export default class Greeting extends React.Component {
    render() {
        return (
            <div>
                <p>Hello, {this.props.name}</p>
            </div>
        );
    }
}

Greeting.defaultProps = {
    name: "Stranger",
    gender: "Other"
};

Greeting.propTypes = {
    name: PropTypes.string,
    gender: PropTypes.oneOf(['Male', 'Female', 'Other']).isRequired,
};

