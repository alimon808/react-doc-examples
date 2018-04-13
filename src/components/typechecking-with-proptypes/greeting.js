// https://reactjs.org/docs/typechecking-with-proptypes
import React from 'react';
import PropTypes from 'prop-types';
import Props from './props';
import Message from './message';

export default class Greeting extends React.Component {
    render() {
        return (
            <div>
                <h1>Typechecking with PropTypes</h1>
                <p>Hello, {this.props.name}</p>
                <Props message="required props"
                    requiredFunc={() => { }}
                    requiredAny={1}
                    customProp={"matchme"}
                />
                <Props
                    requiredFunc={() => { }}
                    requiredAny={1}
                    customProp={"matchme"}
                    message="optional array"
                    optionalArray={[1, 2, 3]}
                />
                <Props
                    requiredFunc={() => { }}
                    requiredAny={1}
                    customProp={"matchme"}
                    message="optional bool"
                    optionalBool={true}
                />
                <Props
                    requiredFunc={() => { }}
                    requiredAny={1}
                    customProp={"matchme"}
                    message="optional func"
                    optionalFunc={() => { return true }}
                />
                <Props
                    requiredFunc={() => { }}
                    requiredAny={1}
                    customProp={"matchme"}
                    message="optional number"
                    optionalNumber={1}
                />
                <Props
                    requiredFunc={() => { }}
                    requiredAny={1}
                    customProp={"matchme"}
                    message="optional object"
                    optionalObject={{ name: 'optional object' }}
                />
                <Props
                    requiredFunc={() => { }}
                    requiredAny={1}
                    customProp={"matchme"}
                    message="optional symbol"
                    optionalSymbol={Symbol()}
                />
                <Props
                    requiredFunc={() => { }}
                    requiredAny={1}
                    customProp={"matchme"}
                    message="optional message"
                    optionalMessage={new Message()}
                />
                <Props
                    requiredFunc={() => { }}
                    requiredAny={1}
                    customProp={"matchme"}
                    message="optional react element"
                    optionalElement={<Message />}
                />
                <Props
                    requiredFunc={() => { }}
                    requiredAny={1}
                    customProp={"matchme"}
                    message="optional node"
                    optionalNode={<p>paragraph element</p>}
                />
                <Props
                    requiredFunc={() => { }}
                    requiredAny={1}
                    customProp={"matchme"}
                    message="optional enum"
                    optionalEnum={"News"}
                />
                <Props
                    requiredFunc={() => { }}
                    requiredAny={1}
                    customProp={"matchme"}
                    message="optional array of numbers"
                    optionalArrayOf={[2]}
                />
                <Props
                    requiredFunc={() => { }}
                    requiredAny={1}
                    customProp={"matchme"}
                    message="optional object of numbers"
                    optionalObjectOf={{ "one": 1 }}
                />
                <Props
                    requiredFunc={() => { }}
                    requiredAny={1}
                    customProp={"matchme"}
                    message="optional object with shape"
                    optionalObjectWithShape={{ color: "green", fontSize: 2 }}
                />
                <Props
                    requiredFunc={() => { }}
                    requiredAny={1}
                    customProp={"matchme"}
                    customArrayProp={["matchmeArray", "matchmeArray"]}
                    message="optional custom props"
                />
            </div>
        );
    }
}

Greeting.propTypes = {
    name: PropTypes.string,
};

