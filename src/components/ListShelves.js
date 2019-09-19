import React, { Component } from 'react'
import { generateKeyPair } from 'crypto'

//! NOTE: I need to move the whole OAuth logic to the APP component and pass it down as necessary

//! NOTE: when it's time to render individual shelves, I should be using nested routes https://reacttraining.com/react-router/web/guides/philosophy
// What do I need from props?
// userID
// ...
export default class ListShelves extends Component {

    state={
        theItems: {}
    }

    //? Do you need the full URL or just /books/v1/...
    requestConfig = {
        path: 'https://www.googleapis.com/books/v1/mylibrary/bookshelves',
        method: 'GET',
        params: {
            uid: this.props.userID,
        },
    }
    
    componentDidMount() {
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

    render() {
        return (
            <div>
                <h2>Shelves</h2>
                <ul>
                {this.state.theItems.map(shelf=>{
                    return (
                        <li>{shelf.title}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
