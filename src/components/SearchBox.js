import React, { Component } from 'react';

export default class SearchBox extends Component {

    state = {
        query: '',
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <form className="form">

                    <div className="field is-grouped">
                        <label className="label is-sr-only">Search for books in Google's book database</label>
                        <div className="control">
                            <input
                                className="input is-large"
                                id="query"
                                name="query"
                                onChange={this.handleInputChange}
                                required
                                type="text"
                                value={this.state.query}
                            />
                        </div>
                        <div className="control">
                            <button
                                className="button is-primary is-large" 
                                onClick={ (event) => this.props.searchForBooks(event, this.state.query) }
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}

