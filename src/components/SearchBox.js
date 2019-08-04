import React, { Component } from 'react'

export default class SearchBox extends Component {

    state = {
        query: ''
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
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
                <button
                    onSubmit={this.handleSubmit}
                    type="submit" 
                >
                    Search
                </button>
            </form>
        )
    }
}

