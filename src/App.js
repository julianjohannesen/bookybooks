import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import Library from './pages/Library';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Contact from './pages/Contact';
import terms from './pages/terms';
import privacy from './pages/privacy';
import NoMatch from './pages/NoMatch';
import './App.scss';

// Athorization details
const apiKey = 'AIzaSyCP4wm4HGR-D-IHRvlnlXGBGGSsjhaR9CY';
const discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/books/v1/rest';
const clientId = '38504770633-kkfnu7g5c9jcsrqqi55d6amrl4v398qm.apps.googleusercontent.com';
const scope = 'https://www.googleapis.com/auth/books';

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

	authDetails = {
		'apiKey': apiKey,
		'discoveryDocs': [discoveryUrl],
		'clientId': clientId,
		'scope': scope
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

	render() {
		return (
			<div className="App" style={{padding:'2em'}}>
				<Router basename={process.env.PUBLIC_URL}>
					<Switch>
						<Route exact path="/" render={ props => <Search {...props} authProps={this.state} /> } />
						<Route path="/search" render={ props => <Search {...props} authProps={this.state} /> }  />
						<Route path="/library" render={ props => <Library {...props} authProps={this.state} /> }  />
						<Route path="/reviews" render={ props => <Reviews {...props} authProps={this.state} /> }  />
						<Route path="/about" render={ props => <About {...props} authProps={this.state} /> }  />
						<Route path="/contact" render={ props => <Contact {...props} authProps={this.state} /> }  />
						<Route path="/privacy" render={ props => <privacy {...props} authProps={this.state} /> }  />
						<Route path="/terms" render={ props => <terms {...props} authProps={this.state} /> }  />
						<Route render={ props => <NoMatch {...props} authProps={this.state} /> }  />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
