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
      homes: [],
    }

    this.homeMouseEnter = this.homeMouseEnter.bind(this);
    this.homeMouseLeave = this.homeMouseLeave.bind(this);
  }

  componentWillMount() {
    axios.get('./homes.json')
      .then((data) => {
        let homes = data.data.homes
        this.setState({ homes: data.data.homes });
      });
  }
  
  homeMouseEnter(i) {
    // i is the index of the home that is hovered. And we know it matches in both components
    // because they derive from the same source.
    let homes = this.state.homes;
    homes[i].home.overlayDisplay = 'block';
    this.setState({ homes: homes })
  }

  homeMouseLeave(i) {
    let homes = this.state.homes;
    homes[i].home.overlayDisplay = 'none';
    this.setState({ homes: homes });
  }

  render() {
    return (
      <div className="app-container">
        <Navbar />
        <HomeList homes={ this.state.homes }
                  homeMouseEnter={ this.homeMouseEnter }
                  homeMouseLeave={ this.homeMouseLeave }/>
        <Map homes={ this.state.homes }/>
      </div>
    );
  }
}

export default App;