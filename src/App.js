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
      searchValue: '',
      noMatchDisplay: 'none'
    }

    this.homeMouseEnter = this.homeMouseEnter.bind(this);
    this.homeMouseLeave = this.homeMouseLeave.bind(this);
    this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
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

  handleMarkerClick(i) {
    let homes = this.fetchedHomes;
    for (let i = 0; i < homes.length; i++) {
      homes[i].home.overlayDisplay = 'none';
    }

    homes[i].home.overlayDisplay = 'block';
    this.setState({ homes: homes })
  }

  handleSearchValueChange(e) {
    //Returns home if the search term appears anywhere in the city / district name

    let homes = this.fetchedHomes;
    let filter = e.target.value.toString().trim().toLowerCase();
    let filteredHomes = [];

    this.setState({ noMatchDisplay: 'none' });
    
    if (filter === '') {
      this.setState({ searchValue: e.target.value, homes: this.fetchedHomes });
    } else {
      for (let i  = 0; i < homes.length; i++) {
        let home = homes[i];
        if (home.home.city.toString().toLowerCase().indexOf(e.target.value) >= 0) {
          filteredHomes.push(home);
        }
      }
      if (filteredHomes.length === 0) {
        this.setState({ noMatchDisplay: 'block' });
      }
      this.setState({ searchValue: e.target.value, homes: filteredHomes })
    }
  }

  onMapClick() {
    console.log('hali');
    let homes = this.fetchedHomes;
    for (let i = 0; i < homes.length; i++) {
      homes[i].home.overlayDisplay = 'none';
    }
    this.setState({ homes: homes })
  }

  render() {
    return (
      <div className="app-container">
        <Navbar searchValue={ this.state.searchValue }
                handleSearchValueChange={ this.handleSearchValueChange }/>
        <Map homes={ this.state.homes }
             handleMarkerClick={ this.handleMarkerClick }
             onMapClick={ this.onMapClick }/>
        <div className="divider-title card-2">
          <h2>List of Homes</h2>
        </div>
        <HomeList homes={ this.state.homes }
                  homeMouseEnter={ this.homeMouseEnter }
                  homeMouseLeave={ this.homeMouseLeave }
                  onMapClick={ this.onMapClick }
                  noMatchDisplay={ this.state.noMatchDisplay }
                  searchedFor={ this.state.searchValue }/>
      </div>
    );
  }
}

export default App;