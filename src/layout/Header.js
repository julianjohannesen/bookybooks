import React from 'react';

const style = {}

export default function Header() {
    return (
        <header className="header" style={style}>
            <h1 className="title">MyBooks</h1>
            <h2 className="subtitle">Books, Authors, Thoughts</h2>
            <p>The menu needs to allow users to log in/out and see the about page and their library.</p>

            <a href="https://bulma.io">This is what a link looks like.</a>
        </header>
    )
}
