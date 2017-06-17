import React, {Component} from 'react';
import axios from 'axios';
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

  loadPlaceholderImg(e) {
    e.target.src = '/no-house-photo.jpg'
  }

  render() {
    console.log('homes: ', this.state.homes);
    return (
      <div className="home-list-container">
        <div className="list-items-container">
          {
            this.state.homes.map((item, index) => {
              let home = item.home;
              
              if (!home.imageUrl) {
                home.imageUrl = './no-house-photo.jpg';
              }

              return (
                <div className="list-item" key={ index }>
                  <div className="img-container">
                    <div className="img-title-background"></div>
                    <p>{ home.streetName + ' ' + home.streetNumber }</p>
                    <img onError={ this.loadPlaceholderImg } src={ home.imageUrl } />
                  </div>
                  <div className="list-item__content">
                    <div className="list-item__content-body">
                      <h3>{ home.postalCode }, { home.city }</h3>
                      <p>
                        <span>Price: </span>
                        <IntlProvider locale="en">
                          <FormattedNumber formatStyle="currency"
                                           value={ home.price } />
                        </IntlProvider>
                        <span> kr.</span>
                      </p>
                      <p><span>Area: </span><span>{ home.areaHome }m<sup>2</sup></span></p>
                      <p><span>Number of Rooms: </span><span>{ home.roomCount }</span></p>
                    </div>
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