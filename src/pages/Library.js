import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function Library() {
    return (
        <React.Fragment>
            <Header />
            <article className="section">
                <p>This is the library page.</p>
                <p>The library page will show:</p>
                <ul>
                    <li>The header and footer</li>
                    <li>A small search box</li>
                    <li>Bookshelves containing books that have been saved to a shelf</li>
                </ul>
            </article>
            <Footer />
        </React.Fragment>

    )
}
