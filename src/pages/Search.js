import React, { Component } from 'react';
import axios from 'axios';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Hero from '../layout/Hero';
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
            <Hero
                authProps={this.props.authProps}

                head={<Header authProps={this.props.authProps} />}
                
                body={
                    <div>
                        <SearchBox books={this.state.books} searchForBooks={this.searchForBooks} />
                        <SearchResults books={this.state.books} />
                    </div>
                }
                
                foot={<Footer />}
            />
        )
    }
}
