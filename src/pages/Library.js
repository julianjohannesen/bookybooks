import React, { Fragment } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ListShelves from '../components/ListShelves';

export default function Library({ authProps }) {
    return (
        <Fragment>
            <Header authProps={authProps} />
            <div className='section'>
                <ListShelves authProps={authProps} />
                <article className="section">
                    <p>Everything that's not in the ListShelves component appears here.</p>
                </article>
            </div>
            <Footer />
        </Fragment>


    )
}
