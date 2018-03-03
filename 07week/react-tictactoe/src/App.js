import React, { Component } from 'react';
// import Board from './Board.js';
// import BoardRow from './boardRow.js';
// import Box from 'Box.js';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ]
    };
  }
  render() {
    const rowStyle = {
      backgroundColor: 'pink',
      color: 'red',
      height: '120px',
      fontSize: '40px',
      margin: '5px auto',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    };
    const boxStyle = {
      height: '110px',
      width: '110px',
      backgroundColor: 'pink',
      margin: 'auto 20px',
      border: '1px solid black'
    };

    return (
      <div>
        {this.state.board.map((row, index) => {
          return <div key={index} style={rowStyle}>{row.map((box, index) => {
            return <div key={index} style={boxStyle}></div>;
          })}</div>;
        })}
      </div>
    );
  }
}




export default App;
