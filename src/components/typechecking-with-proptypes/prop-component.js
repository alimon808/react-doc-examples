import React from 'react';
import Props from './props';
import Message from './message';

export default class MyPropComponent extends React.Component {
    render() {
        const requiredProps = {
            requiredFunc: () => { },
            requiredAny: 1,
            customProp: "matchme"
        };
        return (
            <div>
                <h1>Typechecking with PropTypes</h1>
                <Props info="required props"
                    {...requiredProps}
                />
                <Props info="optional array"
                    {...requiredProps}
                    optionalArray={[1, 2, 3]}
                />
                <Props info="optional bool"
                    {...requiredProps}
                    optionalBool={true}
                />
                <Props
                    info="optional func"
                    {...requiredProps}
                    optionalFunc={() => { return true }}
                />
                <Props info="optional number"
                    {...requiredProps}
                    optionalNumber={1}
                />
                <Props info="optional object"
                    {...requiredProps}
                    optionalObject={{ name: 'optional object' }}
                />
                <Props info="optional symbol"
                    {...requiredProps}
                    optionalSymbol={Symbol()}
                />
                <Props info="optional message"
                    {...requiredProps}
                    optionalMessage={new Message()}
                />
                <Props info="optional react element"
                    {...requiredProps}
                    optionalElement={<Message />}
                />
                <Props info="optional node"
                    {...requiredProps}
                    optionalNode={<p>paragraph element</p>}
                />
                <Props info="optional enum"
                    {...requiredProps}
                    optionalEnum={"News"}
                />
                <Props info="optional array of numbers"
                    {...requiredProps}
                    optionalArrayOf={[2]}
                />
                <Props info="optional object of numbers"
                    {...requiredProps}
                    optionalObjectOf={{ "one": 1 }}
                />
                <Props info="optional object with shape"
                    {...requiredProps}
                    optionalObjectWithShape={{ color: "green", fontSize: 2 }}
                />
                <Props customArrayProp={["matchmeArray", "matchmeArray"]}
                    {...requiredProps}
                    info="optional custom props"
                />
            </div>
        );
    }
}