import React, {Component} from 'react';
import axios from 'axios';
import NumericLabel from 'react-pretty-numbers';
import { numberFormatting } from '../config/numberFormatting';
import { FormattedNumber, IntlProvider } from 'react-intl';

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
        <div className="list-items-container">
          {
            this.state.homes.map((item, index) => {
              let home = item.home;
              return (
                <div className="list-item" key={ index }>
                  <div className="list-header">
                    <h2>{ home.streetName } { home.streetNumber }</h2>
                    <h3>{ home.postalCode }, { home.city }</h3>
                  </div>
                  <div className="list-body numeric-wrapper">
                    <IntlProvider locale="en">
                      <FormattedNumber formatStyle="currency"
                                       value={ home.price } />
                    </IntlProvider>
                    <span> kr.</span>
                  </div>
                  <div className="list-footer">
                    <p>footer</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default HomeList;