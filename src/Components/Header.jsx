import React, { Component } from 'react';

import logo from '../pgssoftware-logo-200px.png';

class Header extends Component {
  render(){
     return(
       <div className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
       </div>
    );
  }
}

export default Header;
