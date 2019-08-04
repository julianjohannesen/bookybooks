import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function NoMatch({ location }) {
    return (
        <React.Fragment>
            <Header />
            <article className="section">
                <h1>Sorry. We could not find a match for <code>{location.pathname}</code></h1>
                <p>Return <Link to="/">Home</Link></p>
            </article>
            <Footer />
        </React.Fragment>

    )
}
