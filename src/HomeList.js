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
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default HomeList;