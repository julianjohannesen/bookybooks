import React, { Component } from 'react';
import cn from 'classnames';

export default class OAuth2 extends Component {

    state = {
        GoogleAuth: {},
        user: {},
        isSignedIn: false,
        isAuthorized: false
    }

    apiKey = 'AIzaSyCP4wm4HGR-D-IHRvlnlXGBGGSsjhaR9CY'
    discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/books/v1/rest'
    clientId = '38504770633-kkfnu7g5c9jcsrqqi55d6amrl4v398qm.apps.googleusercontent.com'
    scope = 'https://www.googleapis.com/auth/books'

    initClient() {
        const authDetails = {
            'apiKey': this.apiKey,
            'discoveryDocs': [this.discoveryUrl],
            'clientId': this.clientId,
            'scope': this.scope
        }

        window.gapi.client.init(authDetails).then(function () {
            this.setState({
                GoogleAuth: window.gapi.auth2.getAuthInstance(),
                user: this.state.GoogleAuth.currentUser.get(),
                isSignedIn: this.state.GoogleAuth.isSignedIn,
                isAuthorized: this.state.user.hasGrantedScopes(this.scope)
            });
            this.state.GoogleAuth.isSignedIn.listen(this.setSigninStatus);
        });
        console.log("The state at the end of initClient: ", this.state)
    }

    handleAuthClick(isSignedIn) {
        if (isSignedIn) { this.state.GoogleAuth.signOut() }
        else { this.state.GoogleAuth.signIn() }
    }

    setSigninStatus() {
        this.setState({
            user: this.state.GoogleAuth.currentUser.get(),
            isSignedIn: this.state.GoogleAuth.isSignedIn,
            isAuthorized: this.state.user.hasGrantedScopes(this.scope)
        });
        if (this.state.isAuthorized) {
            document.querySelector('#sign-in').textContent = 'Sign out';
            document.querySelector('#revoke-access').style.display = 'inline-block';

        } else {
            document.querySelector('#sign-in').textContent = 'Sign In';
            document.querySelector('#revoke-access').style.display = 'none';
        }
    }

    revokeAccess() { this.state.GoogleAuth.disconnect(); }

    componentDidMount() {
        window.gapi.load('client:auth2', this.initClient);
        document.getElementById('sign-in').onclick = () => this.handleAuthClick(this.state.isSignedIn);
    }

    render() {

        return (
            <div>
                <button className={cn('button', 'primary')} id="sign-in">Sign In</button>
                <button className={cn('button', 'primary')} id="revoke-access" style={{ "display": "none" }} onClick={this.revokeAccess}>Revoke access</button>
            </div>
        )
    }
}