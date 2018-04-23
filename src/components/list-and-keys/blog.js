// https://reactjs.org/docs/lists-and-keys.html
// demonstrate list keys are only required to be unique relative to its siblings
import React from 'react';
import ListItem from './list-item';

const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from NPM.' },
];

export function Blog() {
    const sidebar = (
        <ul>
            {
                posts.map((post) => <ListItem key={post.id} value={post.title} />)
            }
        </ul>
    );

    const content = (
        <ul>
            {posts.map((post) =>
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            )}
        </ul>
    );

    return (
        <div>
            <div>
                Blog Sidebar:{sidebar}
            </div>
            <div>
                Blog Content:{content}
            </div>
        </div>
    );
}