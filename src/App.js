import React, { Component } from 'react';
import Head from './components/Head';
import Search from './pages/Search';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App section">
        <Head />
        <Search />
      </div>
    );
  }
}

export default App;
