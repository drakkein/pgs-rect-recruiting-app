import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
  getNavigation() {
    return [
      {url: '/', label: 'About us'},
      {url: '/skicams', label: 'Skicams'},
      {url: '/contact', label: 'Contact'},
    ];
  }

  renderNavigation()
  {
    return this.getNavigation().map((nav, i) => (
      <li className="navigation-link" key={i}><Link activeClassName="active" to={nav.url}>{nav.label}</Link></li>
      ));
  }

  render(){
     return(
      <nav>
        <ul className="navigation">
          {this.renderNavigation()}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
