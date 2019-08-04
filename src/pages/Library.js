import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function Library() {
    return (
        <div>
            <Header />
            <article className="section">
                <p>This is the library page.</p> 
            </article>
            <Footer />
        </div>
    )
}
