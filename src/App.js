import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import Navbar from './components/Navbar';
import Map from './components/Map';
import HomeList from './components/HomeList';

class App extends Component {

  constructor(props) {
    super();

    this.state = {
      homes: []
    }
  }

  componentWillMount() {
    axios.get('./homes.json')
      .then((data) => {
        this.setState({ homes: data.data.homes });
      });
  }

  render() {
    console.log('app render ', this.state.homes);
    return (
      <div className="app-container">
        <Navbar />
        <HomeList homes={ this.state.homes }/>
        <Map homes={ this.state.homes }/>
      </div>
    );
  }
}

export default App;