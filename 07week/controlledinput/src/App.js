import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleInputChange() => {
    this.setState({inputValue: 'e'})
  }

  render() {
    return (
      <input value={this.handleInputChange}>
        {this.state.inputValue}
      </input>
    );
  }
}

export default App;
