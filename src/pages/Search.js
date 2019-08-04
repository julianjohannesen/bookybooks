import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function Search() {
    return (
        <React.Fragment>
            <Header />
            <article className="section">
                <p>This is the search page.</p>
                <p>The Search page will show a large search box and will also display search results.</p>
                <p>The search page will show controls for sorting and filtering results when there are results to display.</p>
                <p>Books can be added to shelves directly from the search results view</p>
                <p>Clicking on a book opens a book detail view.</p>
                <p>The search page will contain a link to the library page</p>
            </article>
            <Footer />
        </React.Fragment>

    )
}
