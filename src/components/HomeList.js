import React, {Component} from 'react';
import axios from 'axios';

class HomeList extends Component {

  constructor(props) {
    super();

    this.state = {
      homes: []
    }
  }
  
  componentWillMount() {
    axios.get('./homes.json')
      .then((data) => {
        this.setState({ homes: data.data.homes })
      });
  }

  render() {
    console.log('homes: ', this.state.homes);
    return (
      <div className="home-list-container">
        <div className="list-item-container">

        </div>
        {
          this.state.homes.map((item, index) => {
            let home = item.home;
            return (
              <h4 key={ index }>{ home.streetName }</h4>
            )
          })
        }
      </div>
    );
  }
}

export default HomeList;