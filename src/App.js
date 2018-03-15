import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: ''
    };
  }

  // updateEmailValue: (evt) => {
  //   this.setState({
  //     emailValue: evt.target.value
  //   });
  // }

  render() {
    return (
      <div className="form-style-10">
        <header className="App-header">
          <h1 className="App-title">Aiste Bia<span>Register now!</span></h1>
        </header>
        <div className="App-member-details">
          <div>
            {/* <label>First name</label>
            <input type="text" name="firstname"> */}
            {/* <label>Last name</label>
              <input type="text" name="lastname"> */}
          </div>
          <div className="section">
            <label>Email Address</label>
            <div className="inner-wrap">
              {/* <input value={this.state.emailValue} onChange={evt => this.updateEmailValue(evt)}/> */}
              <input name="email" type="email" placeholder="email" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
