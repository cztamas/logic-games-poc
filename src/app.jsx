'use strict';

const React = require('react');
const NimWithTransfer = require('./nim-with-transfer/nim-with-transfer');
const UselessExampleGame = require('./useless-example-game/useless-example-game');

module.exports = class App extends React.Component {
  render() {
    return (
      <div>
        <NimWithTransfer />
        <UselessExampleGame />
      </div>
    );
  }
};
