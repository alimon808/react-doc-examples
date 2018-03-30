// source: https://reacts.org/docs/thinking-in-react
import React from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

export default class ProductTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        const rows = [];
        let lastCategory = null;
        this.props.products.forEach((product) => {
            // filter product by search term
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            // filter by stock availabiltiy
            if (inStockOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow key={product.category} product={product} />
                );
            }
            rows.push(
                <ProductRow key={product.name} product={product} />
            );
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}