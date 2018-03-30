// source: https://reacts.org/docs/thinking-in-react
import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }

    render() {
        return (
            <form>
                <input type="text" value={this.props.filterText} placeholder="Search..." onChange={this.handleFilterTextChange} />
                <p>
                    <input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleInStockChange} />
                    {' '} Only show products in stock
                </p>
            </form>
        );
    }
}