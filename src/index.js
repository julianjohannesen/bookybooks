import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Head from './components/Head'
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Fragment>
        <Head />
        <App />
    </Fragment>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//! Note: registering the worker will resolve routing issues in client-side apps caused when the server is not configured to handle the index.html request correclty. https://create-react-app.dev/docs/deployment
serviceWorker.register();
