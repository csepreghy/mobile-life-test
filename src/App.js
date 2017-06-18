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

    this.homeHover = this.homeHover.bind(this);
  }

  componentWillMount() {
    axios.get('./homes.json')
      .then((data) => {
        let homes = data.data.homes
        for (let i = 0; i < homes.length; i++) {
          let home = homes[i];
          home.home.overlayOpacity = 0;          
        }

        this.setState({ homes: data.data.homes });
      });
  }

  homeHover(i) {
    // i is the index of the home that is hovered. And we know it matches in both components
    // because they derive from the same source.
    let homes = this.state.homes;
    homes[i].home.overlayOpacity = 1;
    this.setState({ homes: homes });
  }

  render() {
    return (
      <div className="app-container">
        <Navbar />
        <HomeList homeHover={ this.homeHover } homes={ this.state.homes }/>
        <Map homes={ this.state.homes }/>
      </div>
    );
  }
}

export default App;