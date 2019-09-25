import React from 'react';
import Hero from '../layout/Hero';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import TermsText from '../components/TermsText';


export default function Terms({ authProps }) {
    return (
        <Hero
            authProps={authProps}

            head={<Header authProps={authProps} />}

            body={<TermsText />}
            
            foot={<Footer />}
        />
    )
}
