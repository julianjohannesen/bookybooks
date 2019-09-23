import React, { Component } from 'react';

//! NOTE: when it's time to render individual shelves, I should be using nested routes https://reacttraining.com/react-router/web/guides/philosophy

export default class ListShelves extends Component {

    state={
        theItems: []
    }

    requestConfig = {
        path: '/books/v1/mylibrary/bookshelves',
        params: {
            uid: this.props.authProps.uid
        }
    }
    
    componentDidMount() {
        if(this.props.authProps.isAuthorized){
            window.gapi.client.request(this.requestConfig)
            .then(
                (res)=>{
                    console.log(response);
                    this.setState({theItems: res.result.items})
                }, 
                () => { throw new Error('Error on attempting to parse data.') }
            )      
        }
    }

    render() {
        return (
            <div>
                <h2>Shelves</h2>
                {this.props.authProps.isAuthorized ? (
                    <ul>
                    {this.state.theItems.map(shelf=>{
                        return (
                            <li>{shelf.title}</li>
                            )
                        })}
                    </ul>
                ) : (
                    <p>In order to see your bookshelves and their contents, you'll need to sign-in and authorize BookyBooks to access your Google Books account.</p>
                )}
            </div>
        )
    }
}
