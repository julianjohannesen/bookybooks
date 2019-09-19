import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './pages/About';
import Library from './pages/Library';
import terms from './pages/terms';
import privacy from './pages/privacy';
import NoMatch from './pages/NoMatch';
import Search from './pages/Search';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/search" component={Search} />
            <Route path="/library" component={Library} />
            <Route path="/about" component={About} />
            <Route path="/privacy" component={privacy} />
            <Route path="/terms" component={terms} />
            <Route component={NoMatch} />
        </Switch>
    </Router>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
