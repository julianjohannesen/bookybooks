import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import SearchBox from '../components/SearchBox';
import SearchResults from '../components/SearchResults';

export default function Search() {
    return (
        <React.Fragment>
            <Header />
            <SearchBox />
            <SearchResults />
            <Footer />
        </React.Fragment>

    )
}
