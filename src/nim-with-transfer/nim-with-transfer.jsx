'use strict';

const React = require('react');
const Button = require('@material-ui/core/Button').default;

const startPosition = [5, 4, 8, 12];
const range = length => Array(length).fill('').map((_, index) => index);
const sum = array => array.reduce((sum, item) => sum + item, 0);
const maxItemsToRemove = 3;

module.exports = class NimWithTransfer extends React.Component {
  constructor() {
    super();
    this.clear = this.clear.bind(this);
    this.state = {
      gameState: startPosition
    };
  }

  clickCell(rowIndex, columnIndex) {
    if (!this.isClickable(rowIndex, columnIndex)) return;

    const itemsTaken = this.state.gameState[rowIndex] - columnIndex;
    const newGameState = [...this.state.gameState];
    newGameState[rowIndex] -= itemsTaken;

    if (rowIndex !== this.state.gameState.length - 1) {
      newGameState[rowIndex + 1] += itemsTaken;
    }

    this.setState({ gameState: newGameState });
  }

  isClickable(rowIndex, columnIndex) {
    return columnIndex >= this.state.gameState[rowIndex] - maxItemsToRemove;
  }

  cell(rowIndex, columnIndex) {
    return <div
      className={ `cell ${this.isClickable(rowIndex, columnIndex) ? 'clickable' : ''}` }
      key={ columnIndex }
      onClick={ () => this.clickCell(rowIndex, columnIndex) }
    />;
  }

  row(rowIndex) {
    const rowLength = this.state.gameState[rowIndex];
    const cells = range(rowLength).map(columnIndex => this.cell(rowIndex, columnIndex));

    return (
      <div key={ rowIndex } className="row">
        { cells }
      </div>
    );
  }

  board() {
    return (
      <div className="board">{
        range(this.state.gameState.length).map(
          rowIndex => this.row(rowIndex)
        )
      }</div>
    );
  }

  remainingItemCount() {
    return sum(this.state.gameState);
  }

  status() {
    return <div className="status-message">
      { this.remainingItemCount() > 0 ? 'Te jössz!' : 'Vége' }
    </div>;
  }

  clear() {
    this.setState({
      gameState: startPosition
    });
  }

  render() {
    return (
      <div>
        <h1 className="h1 mb2">Furcsa játék</h1>
        <div className="description">
          Egy lépésben legfeljebb { maxItemsToRemove } elemet elvehetsz a legalsó sorból,
          vagy egy fentebbi sorból az eggyel lejjebb lévőbe mozgathatsz.
        </div>

        { this.board() }
        { this.status() }
        <Button variant="contained" color="primary" onClick={ this.clear }>
          Új játék
        </Button>
      </div>
    );
  }
};
