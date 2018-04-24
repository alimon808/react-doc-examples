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
import FlavorForm from './forms/flavor-form';
import ReservationForm from './forms/reservation';
import Calculator from './lifting-state/calculator';
import SimpleList from './list-and-keys/simple-list';
import { Blog } from './list-and-keys/blog';
import LoginControl from './conditional-rendering/login-control';
import MailBox from './conditional-rendering/mailbox';
import Warning from './conditional-rendering/warning';
import Toggle from './handling-events/toggle';

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
                <hr />
                <FlavorForm />
                <ReservationForm />
                <hr />
                <Calculator />
                <hr />
                <div>Simple List</div>
                <SimpleList numbers={[1, 2, 3, 4, 5]} />
                <hr />
                <Blog />
                <hr />
                <LoginControl />
                <hr />
                <MailBox unreadMessages={['React', 'Re: React', 'Re:Re: React']} />
                <hr />
                <Warning warn={true} />
                <hr />
                <Toggle />
            </div>
        );
    }
}