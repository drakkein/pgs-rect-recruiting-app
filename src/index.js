import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory  } from 'react-router'

import About from './Components/About.jsx';
import SkiCams from './Components/SkiCams.jsx';
import Contact from './Components/Contact.jsx';
import NoMatch from './Components/NoMatch.jsx';
import Footer from './Components/Footer.jsx';
import './index.css';
import './App.css';

ReactDOM.render((
  <div className="App">

    <Router history={browserHistory}>
      <Route path="/" component={About} />
      <Route path="about" component={About}/>
      <Route path="skicams" component={SkiCams}/>
      <Route path="contact" component={Contact}/>
      <Route path="*" component={NoMatch}/>
    </Router>

    <Footer />
  </div>
), document.getElementById('root'))
