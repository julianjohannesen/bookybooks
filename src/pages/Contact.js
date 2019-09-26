import React from 'react';
import Hero from '../layout/Hero';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function Contact ({ authProps }) {
    return (
        <Hero 
            head={
                <Header authProps={authProps} />
            }
            body={
                
                    <article >
                        <p>Contact us.</p>
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
