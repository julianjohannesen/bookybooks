import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import SearchBox from '../components/SearchBox';
import SearchResults from '../components/SearchResults';

export default class Search extends Component {

    state = {
        books: []
    }

    searchForBooks = (event, query) => {

        event.preventDefault();

        // Google Books API endpoint
        const url = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyCP4wm4HGR-D-IHRvlnlXGBGGSsjhaR9CY&q=${query.trim()}&maxResults=40&fields=items(volumeInfo)`

        // No auth required
        axios(url)
            .then(res => {
                this.setState({ books: res.data.items });
                console.log(this.state.books);
            })
            .catch(error => console.error('Error:', error))

    }

    render() {
        return (
            <Fragment>
                <Header authProps={this.props.authProps} />
                <div className="section">
                    <SearchBox books={this.state.books} searchForBooks={this.searchForBooks} />
                    <SearchResults books={this.state.books} />
                </div>
                <Footer />
            </Fragment>

        )
    }
}
