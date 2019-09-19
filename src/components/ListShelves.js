import React, { Component } from 'react';

//! NOTE: when it's time to render individual shelves, I should be using nested routes https://reacttraining.com/react-router/web/guides/philosophy
// What do I need from props? 
// auth status
// userID
// ...
export default class ListShelves extends Component {

    state={
        theItems: []
    }

    //? Do you need the full URL or just /books/v1/...
    requestConfig = {
        path: 'https://www.googleapis.com/books/v1/mylibrary/bookshelves',
        params: {
            uid: this.props.authProps.userID,
        }
    }
    
    componentDidMount() {
        if(this.props.authProps.isAuthorized){
            window.gapi.client.request(this.requestConfig)
            .then(
                (res)=>JSON.parse(res), 
                (res)=>console.log(res)
            )
            .then(
                (data)=>this.setState({theItems: data.items}), 
                (data)=>console.log(data)
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
