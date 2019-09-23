import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function NoMatch({ location, authProps }) {
    return (
        <React.Fragment>
        <Header authProps={authProps} />
            <article className="section">
                <h3>Sorry. We could not find a match for <code>{location.pathname}</code></h3>
                <p>Return <Link to="/">Home</Link></p>
            </article>
            <Footer />
        </React.Fragment>

    )
}
