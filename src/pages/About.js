import React, { Fragment } from 'react';
import Hero from '../layout/Hero';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function About({ authProps }) {
    return (
        <Hero 
            head={
                <Header authProps={authProps} />
            }
            body={
                <div className='section'>
                    <article className="section">
                        <p>This is the about page.</p>
                        <p>Content. Content. Content.</p>
                        <p>Content. Content. Content.</p>
                        <p>Content. Content. Content.</p>
                        <p>Content. Content. Content.</p>

                    </article>
                </div>
            }
            foot={
                <Footer />
            }
        />


    )
}
