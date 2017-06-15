import React, { Component } from 'react';
import HomeList from './HomeList';
import './App.css';

class App extends Component {

  constructor(props) {
    super();

  }

  render() {
    return (
      <div className="app-container">
        <HomeList />
      </div>
    );
  }
}

export default App;