import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function NoMatch({ location, authProps }) {
    return (
        <Fragment>
            <Header authProps={authProps} />
            <div className='section'>
                <article className="section">
                    <h3>Sorry. We could not find a match for <code>{location.pathname}</code></h3>
                    <p>Return <Link to="/">Home</Link></p>
                </article>
            </div>
            <Footer />
        </Fragment>

    )
}
