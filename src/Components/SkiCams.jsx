import React, { Component } from 'react';
import Navigation from './Navigation.jsx';
import Header from './Header.jsx';
import logo from '../logo.svg'

class SkiCams extends Component {
  constructor(){
    super();
    this.state = {
      data: <div className="loader"><img src={logo} alt="Loader" /><p>Loading data...</p></div>
    };
  };
  componentDidMount()
  {
    fetch('https://makevoid-skicams.p.mashape.com/cams.json', {
      method: 'GET',
      headers: {
        'X-Mashape-Key': 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw'
      }
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({data: this.renderCams(json)});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderCams(json)
  {

    return Object.keys(json).map((cam) => {
      let name = json[cam].name;
      if(name === 'Andalo' || name === 'Monte Bondone')
      {
        let date = new Date().toLocaleDateString('pl-PL', {
          day : 'numeric',
          month : 'numeric',
          year : 'numeric'
        }).split('.').join('-');

       return <div key={cam} className="tile cam">
                <h5 className="date">{date}</h5>
               <div className="tile-content">
                 <h2>{name}</h2>
               </div>
               <div className="cam-pics">
                 {this.fetchCamPics(json[cam].cams)}
               </div>
             </div>
     }
    });
  }

  fetchCamPics(cam)
  {
    console.dir(cam);
    return Object.keys(cam).map((pics, key) => {
          if(key < 2)
            return <img className="cam-image" src={cam[pics].url} alt={cam[pics].name} />
      })
  }

  render() {
    return (
      <div className="content">
      <Header />
      <Navigation />
        <div className="App-intro">

          {this.state.data}
        </div>
      </div>

    );
  }
}

export default SkiCams;
