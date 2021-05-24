'use strict';

const React = require('react');
const { Link } = require('react-router-dom');

module.exports = class UselessExampleGame extends React.Component {
  constructor() {
    super();
    this.clear = this.clear.bind(this);
    this.state = {
      result: null
    };
  }

  buttons() {
    return (
      <div>
        <button onClick={ () => this.endGame(true) }>Nyerni szeretnék</button>
        <button onClick={ () => this.endGame(false) }>Veszíteni szeretnék</button>
      </div>
    );
  }

  result() {
    return (
      <div>
        <h2>{ this.state.result === 'win' ? 'Gratulálunk! Nyertél!' : 'Vesztettél :(' }</h2>
        <button onClick={ this.clear }>Új játék</button>
      </div>
    );
  }

  clear() {
    this.setState({ result: null });
  }

  endGame(didPlayerWin) {
    this.setState({
      result: didPlayerWin ? 'win' : 'lose'
    });
  }

  render() {
    return <div>
      <h1>Teljesen haszontalan játék</h1>
      { this.state.result ? this.result() : this.buttons() }

      <Link to="/">Vissza a főoldalra</Link>
    </div>;
  }
};
