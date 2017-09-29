import React, { Component } from 'react';
import Navigation from './Navigation.jsx';
import Header from './Header.jsx';

class Contact extends Component {
  constructor(){
    super();
    this.state = {
      emailError: "",
      email: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkForm= this.checkForm.bind(this);
  };

  handleChange(event)
  {
    this.setState({email: event.target.value});
  }

  checkForm(e)
  {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if(!re.test(this.state.email))
      this.setState({emailError: 'Email format is invalid!'});
  }

  render() {
    return (

      <div className="content">
      <Header />
      <Navigation />
        <div className="App-intro">
          <div className="form-container">
            <form >
              <div className="input-field">
                <input type="text" id="name" maxLength="35" placeholder=" " required />
                <label>Name: </label>
              </div>
              <div className="input-field">
                <input  type="text" id="email" maxLength="35" placeholder=" " onChange={this.handleChange} required />
                <label className="">Email: </label>
              </div>
              <div className="error">
                {this.state.emailError}
              </div>
              <div className="input-field">
                <textarea placeholder=" ">
                </textarea>
                <label>Message: </label>
              </div>
              <button type="submit" onClick={this.checkForm}>Send</button>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default Contact;
