import React, { Component } from 'react';

import './App.css';
import Announcement from './Announcement';
import Tile from './Tile';
import ResetButton from './ResetButton';

class App extends Component {
  constructor() {
    super();
    this.state = {
      board: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ],
      playerTurn: 'X',
      winner: null
    };

  }

  updateBoard(loc, player) {
    if (this.state.board[loc] === 'X' || this.state.board === 'O' ||
    this.state.winner) {
      return;
    }
    const currentBoard = this.state.board;
    currentBoard.splice (loc, 1, this.state.playerTurn);
    this.setState({board: currentBoard});

    const topRow = this.state.board[0] + this.state.board[1] + this.state.board[2];
    if (topRow.match (/XXX|OOO/)) {
      this.setState({winner: this.state.playerTurn});
      return;
    }
    const middleRow = this.state.board[3] + this.state.board[4] + this.state.board[5];
    if (middleRow.match (/XXX|OOO/)) {
      this.setState({winner: this.state.playerTurn});
      return;
    }
    const bottomRow = this.state.board[6] + this.state.board[7] + this.state.board[8];
    if (bottomRow.match (/XXX|OOO/)) {
      this.setState({winner: this.state.playerTurn});
      return;
    }
    const leftColumn = this.state.board[0] + this.state.board[3] + this.state.board[6];
    if (leftColumn.match (/XXX|OOO/)) {
      this.setState({winner: this.state.playerTurn});
      return;
    }
    const midColumn = this.state.board[1] + this.state.board[4] + this.state.board[7];
    if (midColumn.match (/XXX|OOO/)) {
      this.setState({winner: this.state.playerTurn});
      return;
    }
    const rightColumn = this.state.board[2] + this.state.board[5] + this.state.board[8];
    if (rightColumn.match (/XXX|OOO/)) {
      this.setState({winner: this.state.playerTurn});
      return;
    }
    const topLeftDiagonal = this.state.board[0] + this.state.board[4] + this.state.board[8];
    if (topLeftDiagonal.match (/XXX|OOO/)) {
      this.setState({winner: this.state.playerTurn});
      return;
    }
    const topRightDiagonal = this.state.board[2] + this.state.board[4] + this.state.board[6];
    if (topRightDiagonal.match (/XXX|OOO/)) {
      this.setState({winner: this.state.playerTurn});
      return;
    }
    const moves = this.state.board.join('').replace(/ /g, '');
    if (moves.length === 9 ) {
      alert('Game is a draw - Reset the board');
    }
    this.setState({playerTurn: (this.state.playerTurn === 'X') ? 'O' : 'X'});
  }

  resetBoard(){
    this.setState({
      board: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ],
      playerTurn: 'X',
      winner: null
    });
  }

  render() {
    return (
      <div className = "container">
        <div className = "menu">
          <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet"/>
          <h1>TIC - TAC - TOE</h1>
          <Announcement winner = {this.state.winner}/>
        </div>
        {this.state.board.map(function(value, index) {
          return(
            <Tile
              key = {index}
              loc = {index}
              value = {value}
              updateBoard = {this.updateBoard.bind(this)}
              playerTurn = {this.state.playerTurn}/>
          );
        }.bind(this))}
        <ResetButton reset = {this.resetBoard.bind(this)}/>
      </div>
    );
  }
}

export default App;
