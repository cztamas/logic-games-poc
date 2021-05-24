'use strict';

const React = require('react');
const { Link } = require('react-router-dom');

module.exports = class UselessExampleGame extends React.Component {
  endGame(didPlayerWin) {
    const message = didPlayerWin ? 'Gratulálunk! Nyertél!' : 'Vesztettél :(';
    window.alert(message);
  }

  render() {
    return <div>
      <h1>Teljesen haszontalan játék</h1>
      <button onClick={ () => this.endGame(true) }>Nyerni szeretnék</button>
      <button onClick={ () => this.endGame(false) }>Veszíteni szeretnék</button>
      <Link to="/">Vissza a főoldalra</Link>
    </div>;
  }
};