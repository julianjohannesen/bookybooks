import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function About() {
    return (
        <React.Fragment>
            <Header 
                handleAuthClick={this.props.handleAuthClick}
                isSignedIn={this.props.isSignedIn}
            />
            <article className="section">
                <p>This is the about page.</p>
            </article>
            <Footer />
        </React.Fragment>

    )
}
