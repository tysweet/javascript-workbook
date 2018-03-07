import React from 'react';
// import Board from './Board.js';
// import BoardRow from './boardRow.js';
// import Box from 'Box.js';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [[null],[null],[null]],
        [[null],['O'],[null]],
        [[null],[null],[null]],
      ],
      playerTurn: true,
    };
    console.log(this.state);
  }

  handleClick(i) {
    const board = this.state.board.slice();
    board[i][i] = 'X';
    this.setState({board: board});
    // console.log(this);
    // const box = this.state.board.slice();
  //   this.setState({
  //     box: box,
  //   });
  }

  render() {
    // const status = 'Next player: ' + (this.state.playerTurn ? 'X' : 'O');
    const rowStyle = {
      backgroundColor: 'yellow',
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
      backgroundColor: 'lightgrey',
      margin: 'auto 20px',
      border: '1px solid black'
    };

    return (
      <div>
        {this.state.board.map((row, index) => {
          return <div key={index} style={rowStyle}>{row.map((box, index) => {
            return <div key={index} style={boxStyle}>
              <button onClick={this.handleClick}></button>
            </div>;
          })}</div>;
        })}
      </div>
    );
  }
}



export default App;
