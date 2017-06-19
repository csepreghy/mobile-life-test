import React, {Component} from 'react';

class Navbar extends Component {

  constructor(props) {
    super();

  }

  render() {
    return (
      <div className="navbar-container">
        <div className="search-container">
          <input type="text" 
                 placeholder="Search for city" 
                 value={ this.props.searchValue }
                 onChange={ this.props.handleSearchValueChange }/>
          <img className="search-icon" src="/search-icon.svg" alt="Search icon"/>
        </div>
        <img src="/logo.svg" alt="Sunday company logo"/>
        <div className="profile-info-container">
          <img src="/profile.jpg" alt="Profle picture"/>
          <h4>Andrew Chepreghy</h4>
        </div>
      </div>
    );
  }
}

export default Navbar;