import React, { Component } from 'react';
import Navigation from './Navigation.jsx';
import Header from './Header.jsx';

class NoMatch extends Component {

  render() {
    return (

      <div className="content">
      <Header />
      <Navigation />
        <div className="App-intro">
          <h2>Error 404</h2>
          <p>Page not found</p>
        </div>
      </div>

    );
  }
}

export default NoMatch;
