import React from 'react';

const style = {}

export default function Header() {
    return (
        <header className="header" style={style}>
            <h1 className="title">MyBooks</h1>
            <h2 className="subtitle">Books, Authors, Thoughts</h2>
        </header>
    )
}
