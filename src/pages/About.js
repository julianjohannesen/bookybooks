import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function About() {
    return (
        <div>
            <Header />
            <article className="section">
                <p>This is the about page.</p> 
            </article>
            <Footer />
        </div>
    )
}
