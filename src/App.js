import React, { Component } from 'react';
import Form from './components/Form';
import './App.css';
import GiantRobotLTD_Logo from './Assets/GiantRobotLTD_Logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="header">
          <img alt="Giant Robot LTD." src={GiantRobotLTD_Logo} />
          <h1>Welcome</h1>
          <p>Please tell us a bit about yourself to get started.</p>
        </div>

        <Form />

      </div>
    );
  }
}

export default App;
