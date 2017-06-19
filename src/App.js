import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import Navbar from './components/Navbar';
import Map from './components/Map';
import HomeList from './components/HomeList';

class App extends Component {

  fetchedHomes = [];

  constructor(props) {
    super();

    this.state = {
      homes: [],
      searchValue: ''
    }

    this.homeMouseEnter = this.homeMouseEnter.bind(this);
    this.homeMouseLeave = this.homeMouseLeave.bind(this);
    this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
  }

  componentWillMount() {
    axios.get('./homes.json')
      .then((data) => {
        let homes = data.data.homes
        this.fetchedHomes = homes
        this.setState({ homes: homes });
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

  handleSearchValueChange(e) {
    //Returns home if the search term appears anywhere in the city / district name

    let homes = this.fetchedHomes;
    let filter = e.target.value.toString().trim().toLowerCase();
    let filteredHomes = [];
    
    if (filter === '') {
      this.setState({ searchValue: e.target.value, homes: this.fetchedHomes });
    } else {
      for (let i  = 0; i < homes.length; i++) {
        let home = homes[i];
        if (home.home.city.toString().toLowerCase().indexOf(e.target.value) >= 0) {
          filteredHomes.push(home);
        }
      }
      this.setState({ searchValue: e.target.value, homes: filteredHomes })
    }
  }

  render() {
    return (
      <div className="app-container">
        <Navbar searchValue={ this.state.searchValue }
                handleSearchValueChange={ this.handleSearchValueChange }/>
        <HomeList homes={ this.state.homes }
                  homeMouseEnter={ this.homeMouseEnter }
                  homeMouseLeave={ this.homeMouseLeave }/>
        <Map homes={ this.state.homes }/>
      </div>
    );
  }
}

export default App;