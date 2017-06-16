import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Map from './components/Map';
import HomeList from './components/HomeList';

class App extends Component {

  constructor(props) {
    super();

  }

  render() {
    return (
      <div className="app-container">
        <Navbar />
        <HomeList />
        <Map />
      </div>
    );
  }
}

export default App;