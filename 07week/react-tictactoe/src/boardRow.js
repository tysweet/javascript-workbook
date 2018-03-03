import React, { Component } from 'react';

class BoardRow extends Component {
  render() {
    return (
      <div className="BoardRow">
        <header className="BoardRow-header">
          <img src={logo} className="BoardRow-logo" alt="logo" />
          <h1 className="BoardRow-title">Welcome to React</h1>
        </header>
        <p className="BoardRow-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
