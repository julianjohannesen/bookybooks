import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Hero from '../layout/Hero';
import ListShelves from '../components/ListShelves';

export default function Library({ authProps }) {
    return (
        <Hero
            authProps={authProps}
            
            head={<Header authProps={authProps} />}
            
            body={
                <div>
                    <ListShelves authProps={authProps} />
                    <article>
                        <p>Everything that's not in the ListShelves component appears here.</p>
                    </article>
                </div>
            }

            foot={<Footer />}
        />
    )
}
