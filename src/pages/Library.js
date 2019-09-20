import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ListShelves from '../components/ListShelves';

export default function Library({authProps}) {
    return (
        <React.Fragment>
            <Header authProps={authProps}/>
            <ListShelves authProps={authProps} />
            <article className="section">
                <p>Everything that's not in the ListShelves component appears here.</p>
            </article>
            <Footer />
        </React.Fragment>

    )
}
