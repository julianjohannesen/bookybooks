import React from 'react';
import OAuth2 from '../components/OAuth2'

export default function Header() {
    return (
        <React.Fragment>
            <header className="header">
                <h1 className="title">MyBooks</h1>
                <h2 className="subtitle">Books, Authors, Thoughts</h2>
            </header>
            <nav className="navbar">
                <OAuth2 />
            </nav>
        </React.Fragment>
    )
}
