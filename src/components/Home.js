import React from 'react';
import { FormattedNumber, IntlProvider } from 'react-intl';

const loadPlaceholderImg = e => {
  e.target.src = '/no-house-photo.jpg'
}

const Home = ({ index, streetName, streetNumber, imageUrl, postalCode, city, price, areaHome, roomCount, homeMouseEnter, homeMouseLeave }) => (
 <div className="list-item" 
      key={ index } 
      onMouseEnter={ () => { homeMouseEnter() } } 
      onMouseLeave={ () => { homeMouseLeave() } } >
    <div className="img-container">
      <div className="img-title-background"></div>
      <p>{ streetName + ' ' + streetNumber }</p>
      <img onError={ loadPlaceholderImg } src={ imageUrl } />
    </div>
    <div className="list-item__content">
      <div className="list-item__content-body">
        <h3>{ postalCode }, { city }</h3>
        <p>
          <span>Price: </span>
          <IntlProvider locale="en">
            <FormattedNumber formatStyle="currency"
                             value={ price } />
          </IntlProvider>
          <span> kr.</span>
        </p>
        <p><span>Area: </span><span>{ areaHome }m<sup>2</sup></span></p>
        <p><span>Number of Rooms: </span><span>{ roomCount }</span></p>
      </div>
    </div>
  </div>
);

export default Home