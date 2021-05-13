'use strict';

const React = require('react');

const startPosition = [5, 3, 8, 12];
const range = length => Array(length).fill('').map((_, index) => index + 1);

module.exports = class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameState: startPosition
    };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        {
          this.state.gameState.map((itemsInRow, rowIndex) => (
            <div key={ rowIndex }>{
              range(itemsInRow).map(columnIndex => <div className="cell" key={ columnIndex } />)
            }</div>
          ))
        }
      </div>
    );
  }
};
