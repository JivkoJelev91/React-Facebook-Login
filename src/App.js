import React, { Component } from 'react';
import logo from './logo.svg';
import Facebook from './components/Facebook';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3> Faceebok Authenticate</h3>
        </header>
        <h4> To get started, authenticate with Facebook.</h4>
        <Facebook/>
      </div>
    );
  }
}

export default App;
