import React, { Component } from 'react';
import axios from 'axios';

export default class SearchBox extends Component {

    state = {
        query: '',
        books: []
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    handleButtonClick = event => {

        // Google Books API endpoint
        const url = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyCP4wm4HGR-D-IHRvlnlXGBGGSsjhaR9CY&q=${this.state.query.trim()}&maxResults=40&fields=items(volumeInfo)`
		
		axios(url)
        .then(res=>{
            this.setState({books: res.data.items});
            console.log(this.state.books);
        })
        .catch(error => console.error('Error:', error))
        
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
            <form>
                <input 
                    aria-label="Search for books in Google's book database"
                    id="query"
                    name="query"
                    onChange={this.handleInputChange} 
                    required 
                    type="text" 
                    value={this.state.query}
                />
                <button onClick={this.handleButtonClick}>
                    Search
                </button>
            </form>

            <div>
            {JSON.stringify(this.state.books)}
            </div>
            </div>
        )
    }
}

