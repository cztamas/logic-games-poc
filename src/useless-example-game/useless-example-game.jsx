'use strict';

const React = require('react');
const { Link } = require('react-router-dom');
const Button = require('@material-ui/core/Button').default;

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
      <div className="mb1">
        <Button variant="contained" color="primary" onClick={ () => this.endGame(true) }>
          Nyerni szeretnék
        </Button>
        <span className="mr1"></span>
        <Button variant="contained" color="secondary" onClick={ () => this.endGame(false) }>
          Veszíteni szeretnék
        </Button>
      </div>
    );
  }

  result() {
    return (
      <div className="mb1">
        <h2>{ this.state.result === 'win' ? 'Gratulálunk! Nyertél!' : 'Vesztettél :(' }</h2>
        <Button variant="contained" color="primary" onClick={ this.clear }>
          Új játék
        </Button>
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
