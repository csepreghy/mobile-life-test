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
                 placeholder="Search for city / district" 
                 value={ this.props.searchValue }
                 onChange={ this.props.handleSearchValueChange }/>
        </div>
      </div>
    );
  }
}

export default Navbar;