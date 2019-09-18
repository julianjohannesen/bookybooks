Hey folks. I’m working on personal library app as a JAMstack exercise. I’m using the Goolge Books API, which allows the app to do almost anything a user can do on https://books.google.com/ .  Anyway, I’m hoping that someone might be willing to comment on my reasoning about how to use the API properly, and particularly how to handle the authorization process.

Background:
1.	This is all client-side
2.	I’m using Create React App without Redux or hooks at the moment, and because this is an exercise, that’s how I want to keep it for now. I’ll create the Redux and hook versions later.
3.	I’m using Google’s JavaScript Client, aka gapi

Process:
1.	The gapi library is loaded in public/index.html
2.	An OAuth component contains the auth logic and renders a sign in button.
3.	The library is initialized in OAuth's componentDidMount
```js
window.gapi.load('client:auth2', this.gapiLoadConfig);
```
4.	The config object contains a callback function that calls 
```js
init() {
    window.gapi.client.init(this.authDetails)
        .then( () => {
            this.setState({
                GoogleAuth: window.gapi.auth2.getAuthInstance()
            });
        });
}

```
authDetails contains the apiKey, clientID, scope, and discovery doc URL.

Okay. So this is one of the things I'm curious about. I store the Google auth instance in state. the rationale is that the sign in status, user details, and authorization details will change, so why not put all of that stuff in state. And I'll be able to leverage React's component lifecycle. Does that makes sense? 
5. Clicking the sign in button calls either this.state.GoogleAuth.signIn() or this.state.GoogleAuth.signOut()
6. This triggers an update. 
    - componentDidUpdate contains checks to see if GoogleAuth has changed. That triggers:
    ```js
    this.setState({
        isSignedIn: this.state.GoogleAuth.isSignedIn.get()
    });
    // On click, if signed out, then sign in and vice versa.
    document.getElementById('sign-in').addEventListener( 'click', () => this.handleAuthClick(this.state.isSignedIn) );
    ```
    - That triggers another update. componentDidUpdate also checks for whether this.state.isSignedIn has changed, which in turn triggers:
    ```js
    this.setState({
        user: this.state.GoogleAuth.currentUser.get(),
    });
    ```
    - That triggers another update. componentDidUpdate also checks for whether this.state.user has changed, which in turn triggers:
    ```js
    this.setState({
        isAuthorized: this.state.user.hasGrantedScopes(this.scope)
    });
    ```

And this is the other big question I have. Give that I'm not usring Redux or hooks, is this the best way the handle this flow?