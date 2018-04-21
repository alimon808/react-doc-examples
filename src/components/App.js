import React from 'react';
import HelloWorld from './hello-world/HelloWorld';
import Clock from './clock/Clock.js';
import Welcome from './welcome/Welcome';
import Comment from './comment/Comment';
import FilterableProductTable from './filterable-product-table/FilterableProductTable';
import TypeCheckingWithPropTypes from './typechecking-with-proptypes/prop-component';
import SimpleForm from './forms/simple';
import { NameForm } from './forms/name-form';
import { EssayForm } from './forms/essay-form';

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://localhost:3000/kitty.jpeg'
    }
};

export default class App extends React.Component {
    render() {
        return (
            <div>
                <HelloWorld />
                <hr />
                <Welcome name="Sara" title="Tic Tac Toe" />
                <Clock />
                <hr />
                Comments:
                <Comment
                    date={comment.date}
                    text={comment.text}
                    author={comment.author}
                />
                <hr />
                <FilterableProductTable />
                <TypeCheckingWithPropTypes name="John Smith" />
                <hr />
                <SimpleForm />
                <hr />
                <NameForm />
                <hr />
                <EssayForm />
            </div>
        );
    }
}