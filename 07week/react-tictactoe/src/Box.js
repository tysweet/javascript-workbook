import React, { Component } from 'react';

class Box extends Component {
  render() {
    return (
      <div className="Box">
        <header className="Box-header">
          <img src={logo} className="Box-logo" alt="logo" />
          <h1 className="Box-title">Welcome to React</h1>
        </header>
        <p className="Box-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
