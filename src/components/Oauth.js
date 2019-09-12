// Google Auth object
var GoogleAuth; 

// Initialize the client object and auth2 object
function initClient() {
  // Initialize js client library
  gapi.client.init({
      // Note: the API key is automatically added to the end of discovery document URLs
      'apiKey': 'AIzaSyCP4wm4HGR-D-IHRvlnlXGBGGSsjhaR9CY',
      // ClientID and scope are both required for Oauth
      'clientId': '38504770633-kkfnu7g5c9jcsrqqi55d6amrl4v398qm.apps.googleusercontent.com',
      'scope': 'https://www.googleapis.com/auth/books',
      // The API schema
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/books/v1/rest']
  }).then(function () {
    // Create the gapi.auth2 object. It will be used to monitor authorization status.
      GoogleAuth = gapi.auth2.getAuthInstance();
      // Listen for sign-in state changes. updateSigninStatus will fire, for example, when a user grants your application authorization 
      GoogleAuth.isSignedIn.listen(updateSigninStatus);
  });
} 

// This will direct the user to Google OAuth
GoogleAuth.signIn();

// Authorization flag
var isAuthorized;
// Stores current request details
var currentApiRequest;

// Store the request details. Then check to determine whether the user has authorized the application. If the user has granted access, make the API request. If the user has not granted access, initiate the sign-in flow.
function sendAuthorizedApiRequest(requestDetails) {
  currentApiRequest = requestDetails;
  if (isAuthorized) {
    // Make API request
    // gapi.client.request(requestDetails)
    // Reset currentApiRequest variable.
    currentApiRequest = {};
  } else {
    GoogleAuth.signIn();
  }
}

// Listener called when user completes auth flow. If the currentApiRequest is set, then the user was prompted to authorize the application before the request is executed. In that case, proceed with that API request.
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    isAuthorized = true;
    if (currentApiRequest) {
      sendAuthorizedApiRequest(currentApiRequest);
    }
  } else {
    isAuthorized = false;
  }
}

// Client Secret: YQRwVc9rVyBBK1iYYdvaqUEW 
