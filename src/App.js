import React, { Component } from 'react';
import Head from './components/Head';
import Search from './pages/Search';
import './App.scss';

class App extends Component {

  state = {
    GoogleAuth: {},
    user: {},
    isSignedIn: false,
    isAuthorized: false
  }

  // Handle loading gapi, or handle any errors
  gapiLoadConfig = {
    callback: () => { this.init() },
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

  init() {
    window.gapi.client.init(this.authDetails)
      .then(() => {
        this.setState({
          GoogleAuth: window.gapi.auth2.getAuthInstance()
        });
      });
    console.log("The state at the end of init: ", this.state)
  }

  handleAuthClick(isSignedIn) {
    if (isSignedIn) { this.state.GoogleAuth.signOut() }
    else { this.state.GoogleAuth.signIn() }
    console.log("When does this fire?", this.state.isSignedIn, this.state.isAuthorized, this.state.user);
  }

  // revokeAccess() { this.state.GoogleAuth.disconnect(); }

  componentDidMount() {
    // Once the component has mounted, initialize gapi. If I were loading the script here, I could chain this in a promise.
    if (window.gapi) {
      window.gapi.load('client:auth2', this.gapiLoadConfig)
    } else {
      console.warn("Library has not loaded. Set timeout and try again.")
      setTimeout(window.gapi.load('client:auth2', this.gapiLoadConfig), 250);
    }

  }

  componentDidUpdate(prevProps, prevState) {
    // Once the Google Authorization Object is stored in state, determine whether a user is signed in
    if (this.state.GoogleAuth !== prevState.GoogleAuth) {
      this.setState({
        isSignedIn: this.state.GoogleAuth.isSignedIn.get()
      });
    }
    // Once a user has signed in, get the current user and determine authorization
    if (this.state.isSignedIn !== prevState.isSignedIn) {
      // Get the current user. On sign out, this might be set to null. Not sure.
      this.setState({
        user: this.state.GoogleAuth.currentUser.get(),
      });
    }
    if (this.state.user !== prevState.user) {
      this.setState({
        isAuthorized: this.state.user.hasGrantedScopes(this.scope)
      });
    }
  }

  //! Putting the Head component only here won't work. I need it on every page. Ugh.
  render() {
    return (
      <div className="App section" style={{ paddingTop: "1rem" }}>
        <Head />
        <Search 
          handleAuthClick={this.handleAuthClick}
          isSignedIn={this.state.isSignedIn} 
        />
      </div>
    );
  }
}

export default App;
