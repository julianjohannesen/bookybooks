import React, { Fragment } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function Reviews({ authProps }) {
    return (
        <Fragment>
            <Header authProps={authProps} />
            <div className='section'>
                <article className="section">
                    <p>This is the about page.</p>
                </article>
            </div>
            <Footer />
        </Fragment>

    )
}
