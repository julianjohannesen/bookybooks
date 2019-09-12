import React, { Component } from 'react';

export default class OAuth2 extends Component {

    GoogleAuth
    SCOPE = 'https://www.googleapis.com/auth/books'
    
    initClient() {
        console.log("initClient fired!")
        // Retrieve the discovery document(s)
        const discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/books/v1/rest';

        // Initialize the gapi.client object.
        window.gapi.client.init({
            'apiKey': 'AIzaSyCP4wm4HGR-D-IHRvlnlXGBGGSsjhaR9CY',
            'discoveryDocs': [discoveryUrl],
            'clientId': '38504770633-kkfnu7g5c9jcsrqqi55d6amrl4v398qm.apps.googleusercontent.com',
            'scope': this.SCOPE
        }).then(function () {
            this.GoogleAuth = window.gapi.auth2.getAuthInstance();
            console.log("The GoogleAuth object", this.GoogleAuth)

            // Listen for sign-in state changes, e.g. when a user grants authorization
            this.GoogleAuth.isSignedIn.listen(this.updateSigninStatus);

            // Handle initial sign-in state. (Determine if user is already signed in.)
            const user = this.GoogleAuth.currentUser.get();
            this.setSigninStatus();

            // Call handleAuthClick function when user clicks on "Sign In/Authorize" button.
            document.querySelector('#sign-in-or-out-button').click(function () {
                this.handleAuthClick();
            });
            document.querySelector('#revoke-access-button').click(function () {
                this.revokeAccess();
            });
        });
    }

    handleAuthClick() {
        console.log("The sign in button handler fired.")
        if (this.GoogleAuth.isSignedIn.get()) {
            // User is authorized and has clicked 'Sign out' button.
            this.GoogleAuth.signOut();
        } else {
            // User is not signed in. Start Google auth flow.
            this.GoogleAuth.signIn();
        }
    }


    setSigninStatus(isSignedIn) {
        const user = this.GoogleAuth.currentUser.get();
        const isAuthorized = user.hasGrantedScopes(this.SCOPE);
        if (isAuthorized) {
            document.querySelector('#sign-in-or-out-button').textContent = 'Sign out';
            document.querySelector('#revoke-access-button').style.display = 'inline-block';

        } else {
            document.querySelector('#sign-in-or-out-button').textContent = 'Sign In/Authorize';
            document.querySelector('#revoke-access-button').style.display = 'none';
        }
    }

    updateSigninStatus(isSignedIn) { this.setSigninStatus(); }

    revokeAccess() { this.GoogleAuth.disconnect(); }

    componentDidMount() {
        console.log("componentDidMount fires")
        // The gapi client is loaded in the Head component via Helmet
        // Call the initClient function after the modules load.
        //window.gapi.load('client:auth2', this.initClient);
    }

    render() {

        return (
            <div>
                <button id="sign-in-or-out-button" onClick={this.handleAuthClick}>Sign In</button>
                <button id="revoke-access-button" style={{ "display": "none" }} onClick={this.handleAuthClick}>Revoke access</button>
            </div>
        )
    }
}