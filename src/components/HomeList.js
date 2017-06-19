import React, {Component} from 'react';

import Home from './Home';
class HomeList extends Component {

  constructor(props) {
    super();

  }

  render() {
    return (
      <div className="home-list-container">
        <div className="title"></div>
        <div className="no-match" style={{ display: this.props.noMatchDisplay }}>
          <h4>No match found</h4>
          <p>No city found for '{ this.props.searchedFor }'. Please make sure you typed in the city correctly</p>
        </div>
        <div className="list-items-container">
          {
            this.props.homes.map((item, index) => {
              let home = item.home;
              
              if (!home.imageUrl) {
                home.imageUrl = './no-house-photo.jpg';
              }

              return (
                <Home key={ index }
                      streetName={ home.streetName }
                      streetNumber={ home.streetNumber }
                      imageUrl={ home.imageUrl }
                      postalCode={ home.postalCode }
                      city={ home.city }
                      price={ home.price }
                      areaHome={ home.areaHome }
                      roomCount={ home.roomCount} 
                      homeMouseEnter={ () => { this.props.homeMouseEnter(index) } }
                      homeMouseLeave={ () => { this.props.homeMouseLeave(index) } }/>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default HomeList;