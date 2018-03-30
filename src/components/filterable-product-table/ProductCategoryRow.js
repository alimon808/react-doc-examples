// source: https://reacts.org/docs/thinking-in-react
import React from 'react';

export default class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr>
                <th colSpan="2">{this.props.product.category}</th>
            </tr>
        );
    };
}