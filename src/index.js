import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Search from './pages/Search';
import Library from './pages/Library';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Contact from './pages/Contact';
import terms from './pages/terms';
import privacy from './pages/privacy';
import NoMatch from './pages/NoMatch';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/search" component={Search} />
            <Route path="/library" component={Library} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
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
