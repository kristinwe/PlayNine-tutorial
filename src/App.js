import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayNineApp from './PlayNineApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to PlayNine-tutorial</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/PlayNineApp.js</code> and save to reload.
        </p>
        <PlayNineApp></PlayNineApp>
      </div>
    );
  }
}

export default App;
