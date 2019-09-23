import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function Reviews({authProps}) {
    return (
        <React.Fragment>
            <Header authProps={authProps} />
            <article className="section">
                <p>This is the about page.</p>
            </article>
            <Footer />
        </React.Fragment>

    )
}
