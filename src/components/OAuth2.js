import React, { Component } from 'react';
import cn from 'classnames';

export default class OAuth2 extends Component {

    state = {
        GoogleAuth: {},
        user: {},
        isSignedIn: false,
        isAuthorized: false
    }

    // Handle loading gapi, or handle any errors
    loadCallbackConfig = {
        callback: () => { this.initClient() },
        onerror: () => { throw new Error() },
        timeout: 5000,
        ontimeout: () => { throw new Error() }
    }

    // Athorization details
    apiKey = 'AIzaSyCP4wm4HGR-D-IHRvlnlXGBGGSsjhaR9CY'
    discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/books/v1/rest'
    clientId = '38504770633-kkfnu7g5c9jcsrqqi55d6amrl4v398qm.apps.googleusercontent.com'
    scope = 'https://www.googleapis.com/auth/books'
    authDetails = {
        'apiKey': this.apiKey,
        'discoveryDocs': [this.discoveryUrl],
        'clientId': this.clientId,
        'scope': this.scope
    }

    initClient() {
        window.gapi.client.init(this.authDetails)
            .then( () => {
                this.setState({
                    GoogleAuth: window.gapi.auth2.getAuthInstance()
                });
            });
        console.log("The state at the end of initClient: ", this.state)
    }            
    
    handleAuthClick(isSignedIn) {
        if (isSignedIn) { this.state.GoogleAuth.signOut() }
        else { this.state.GoogleAuth.signIn() }
    }
    
    setSigninStatus() {
        
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
        // Once the component has mounted, start the authorization process
        window.gapi.load('client:auth2', this.loadCallbackConfig);
        
    }
    
    //? This is essentially a listener. I'm running these checks every udpate. But is that necessary? If I did all of this with promises, I wouldn't need to run those checks. On the other hand, I do need to listen for some of these changes
    componentDidUpdate(prevProps, prevState) {
        // Once the Google Authorization Object is stored in state, determine whether a user is signed in
        if(this.state.GoogleAuth !== prevState.GoogleAuth){
            this.setState({
                isSignedIn: this.state.GoogleAuth.isSignedIn.get()
            });
            // On click, if signed out, then sign in and vice versa.
            document.getElementById('sign-in').addEventListener( 'click', () => this.handleAuthClick(this.state.isSignedIn) );
        }
        // Once a user has signed in, get the current user and determine authorization
        if(this.state.isSignedIn !== prevState.isSignedIn){
            this.setState({
                user: this.state.GoogleAuth.currentUser.get(),
            });
            
        }
        if(this.state.user !== prevState.user){
            this.setState({
                isAuthorized: this.state.user.hasGrantedScopes(this.scope)
            });
        } 
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