import React from 'react';
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
                
                    <article>
                        <p>This is the about page.</p>
                        <p>Content. Content. Content.</p>
                        <p>Content. Content. Content.</p>
                        <p>Content. Content. Content.</p>
                        <p>Content. Content. Content.</p>

                    </article>
                
            }
            foot={
                <Footer />
            }
        />


    )
}
