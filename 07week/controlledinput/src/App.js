import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({inputValue: e.target.value})
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <input value={this.state.inputValue}
            onChange = {this.handleInputChange} type = 'text'>
          </input><RaisedButton label="This is a button" />
          <p>This is text on the page</p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
