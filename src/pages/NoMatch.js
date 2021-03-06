import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../layout/Hero';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function NoMatch({ location, authProps }) {
    return (
        <Hero
            head={
                <Header authProps={authProps} />
            }
            body={

                <article >
                    <h3>Sorry. We could not find a match for <code>{location.pathname}</code></h3>
                    <p>Return <Link to="/">Home</Link></p>
                </article>

            }
            foot={
                <Footer />
            }
        />

    )
}
