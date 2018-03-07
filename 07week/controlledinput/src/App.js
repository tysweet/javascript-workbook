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
      <div onClick=>

      </div>
    );
  }
}

export default App;
