import React from 'react';

export default class Message extends React.Component {
    render() {
        return (
            <p>{this.props.body}</p>
        );
    }
}

// Specifies the default values for props
Message.defaultProps = {
    body: "My default body"
};

Message.propTypes = {

};