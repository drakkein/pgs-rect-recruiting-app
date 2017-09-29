import React, { Component } from 'react';
import Navigation from './Navigation.jsx';
import Header from './Header.jsx';

class About extends Component {

  getTiles() {
    return [
      {img: 'adl1z8_ngy-stacy-wyss.jpg', header: 'Lorem Ipsum', content: 'Curabitur sit amet justo ac nibh elementum tempor fringilla ac eros. Maecenas orci sem, sollicitudin non varius id, tempor sit amet ex.'},
      {img: 'emzus7dbliw-matt-jones.jpg', header: 'Lorem Ipsum', content: 'Curabitur sit amet justo ac nibh elementum tempor fringilla ac eros. Maecenas orci sem, sollicitudin non varius id, tempor sit amet ex.'},
      {img: 'mk2usqdqe5e-john-cobb.jpg', header: 'Lorem Ipsum', content: 'Curabitur sit amet justo ac nibh elementum tempor fringilla ac eros. Maecenas orci sem, sollicitudin non varius id, tempor sit amet ex.'},
    ]
  }

  renderTiles() {
    return this.getTiles().map((tile, i) => {
      let img = require("../Vendor/unsplash/"+tile.img);
      return <div className="tile" key={i}>
        <img className="tile-img" src={img} alt={tile.header} />
        <div className="tile-content">
          <h2>{tile.header}</h2>
          <p>{tile.content}</p>
        </div>
      </div>
    });
  }

  render() {
    return (

      <div className="content">
      <Header />
      <Navigation />
        <div className="App-intro">
          {this.renderTiles()}
        </div>
      </div>

    );
  }
}

export default About;
