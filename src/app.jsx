'use strict';

const React = require('react');
const { Switch, Route, Link } = require('react-router-dom');

const NimWithTransfer = require('./nim-with-transfer/nim-with-transfer');
const UselessExampleGame = require('./useless-example-game/useless-example-game');

module.exports = class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/strange">
            <NimWithTransfer />
          </Route>
          <Route path="/useless">
            <UselessExampleGame />
          </Route>
          <Route path="/">
            <Overview />
          </Route>
        </Switch>
      </div>
    );
  }
};

const Overview = () => (
  <div>
    <h1>Válassz egy játékot!</h1>
    <Link to="/strange">Furcsa játék</Link><br />
    <Link to="/useless">Ostoba játék</Link>
  </div>
);
