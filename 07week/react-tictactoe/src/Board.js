import React, { Component } from 'react';

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <header className="Board-header">
          <img src={logo} className="Board-logo" alt="logo" />
          <h1 className="Board-title">Welcome to React</h1>
        </header>
        <p className="Board-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
